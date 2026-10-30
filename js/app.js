(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b === undefined ? 1 : b, Math.max(a === undefined ? 0 : a, v)); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var ease = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia && matchMedia("(hover:hover) and (pointer:fine)").matches;
  var SVGNS = "http://www.w3.org/2000/svg";

  if (window.I18N) window.I18N.init();

  /* ------------------------------------------------------------ ticker */
  (function () {
    var track = $("#tickerTrack");
    if (!track) return;
    var first = track.firstElementChild;
    for (var i = 0; i < 5; i++) track.appendChild(first.cloneNode(true));
  })();

  /* ------------------------------------------------------------ nav */
  var nav = $("#nav");
  var menuLinks = $$(".menu a");
  var menuSecs = menuLinks.map(function (a) { return $(a.getAttribute("href")); });
  function navState() {
    var y = window.scrollY || 0;
    nav.classList.toggle("solid", y > 40);
    var max = document.documentElement.scrollHeight - innerHeight;
    const spv = max > 0 ? clamp(y / max).toFixed(4) : 0;
    nav.style.setProperty("--sp", spv);
    document.documentElement.style.setProperty("--page", spv);
    var cur = -1;
    menuSecs.forEach(function (s, i) {
      if (!s) return;
      var r = s.getBoundingClientRect();
      if (r.top < innerHeight * 0.45 && r.bottom > innerHeight * 0.25) cur = i;
    });
    menuLinks.forEach(function (a, i) { a.classList.toggle("on", i === cur); });
  }

  /* ------------------------------------------------------------ reveal */
  var rvs = $$(".rv");
  if (reduce || !("IntersectionObserver" in window)) {
    rvs.forEach(function (e) { e.classList.add("in"); });
  } else {
    var rvIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); rvIO.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    rvs.forEach(function (e) { rvIO.observe(e); });
  }

  /* ------------------------------------------------------------ counters */
  function fmt(v, dec) {
    return v.toLocaleString(window.I18N && window.I18N.lang === "en" ? "en-US" : "es-ES", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  var counters = $$("[data-count]").map(function (el) {
    return { el: el, v: parseFloat(el.getAttribute("data-count")), d: parseInt(el.getAttribute("data-dec") || "0", 10), done: false, cur: null };
  });
  function paint(c, val) { c.cur = val; c.el.textContent = fmt(val, c.d); }
  function runCounter(c) {
    if (c.done) return;
    c.done = true;
    if (reduce) { paint(c, c.v); return; }
    var t0 = performance.now(), dur = 1500;
    (function step(now) {
      var t = clamp((now - t0) / dur);
      paint(c, c.v * easeOut(t));
      if (t < 1) requestAnimationFrame(step); else paint(c, c.v);
    })(t0);
  }
  if ("IntersectionObserver" in window && !reduce) {
    counters.forEach(function (c) { paint(c, 0); });
    var cIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        counters.forEach(function (c) { if (c.el === e.target) runCounter(c); });
        cIO.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cIO.observe(c.el); });
  }
  document.addEventListener("langchange", function () {
    counters.forEach(function (c) { paint(c, c.done ? c.v : (c.cur || 0)); });
    if (lb && lb.open) lbShow(lbIdx);
  });

  /* ------------------------------------------------------------ hero parallax */
  var heroStage = $("#heroStage");
  var hero = $("#hero");
  var mx = 0, my = 0, tx = 0, ty = 0, heroRaf = 0;
  function heroTick() {
    tx = lerp(tx, mx, 0.07); ty = lerp(ty, my, 0.07);
    heroStage.style.setProperty("--px", tx.toFixed(2) + "px");
    heroStage.style.setProperty("--py", ty.toFixed(2) + "px");
    if (Math.abs(tx - mx) > 0.05 || Math.abs(ty - my) > 0.05) heroRaf = requestAnimationFrame(heroTick); else heroRaf = 0;
  }
  if (fine && !reduce && hero && heroStage) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      mx = -((e.clientX - r.left) / r.width - 0.5) * 26;
      my = -((e.clientY - r.top) / r.height - 0.5) * 18;
      if (!heroRaf) heroRaf = requestAnimationFrame(heroTick);
    });
  }
  function heroScroll() {
    if (!heroStage || reduce) return;
    var y = window.scrollY || 0;
    if (y < innerHeight * 1.3) heroStage.style.setProperty("--sy", (y * 0.16).toFixed(1) + "px");
  }

  /* ------------------------------------------------------------ assembly (scroll-scrubbed) */
  var mont = $("#montaje");
  var cad = $("#cad");
  var G = [0, 1, 2, 3].map(function (i) { return $("#g" + i); });
  var wingU = $("#wingU"), wingL = $("#wingL"), stabU = $("#stabU"), stabL = $("#stabL");
  var hinge = $("#hinge"), labParts = $("#labParts"), labDeploy = $("#labDeploy");
  var cubaWrap = $("#cubaWrap"), cubaBox = $("#cubaBox"), cubaPct = $("#cubaPct");
  var stepsEl = $("#steps"), stepLis = $$("li", stepsEl);
  var phSpans = $$("#phLabels span"), phNum = $("#phNum");
  /* 4 partes: morro, sección central (alas), sección trasera, cono de cola */
  var DX = [-90, 0, 55, 100];       /* desplazamiento inicial de cada parte */
  var DLY = [0.10, 0, 0.0, 0.22];    /* retardo (escalonado) de cada parte */
  var lastPh = -1;

  /* La ilustración se reproduce SOLA, por tiempo (T = 0..4, una unidad por fase), en bucle.
     No depende del scroll ni del cursor: solo se pausa cuando no está en pantalla. */
  var T = 0, fadeK = 1;
  function updateMont(t, phShown) {
    if (!cad) return;
    var ph = Math.min(3, Math.floor(t));
    var l = clamp(t - ph);
    var draw = 1, fo = 0, asm = [0, 0, 0, 0], dep = 0, svgO = 1, r = 0, jo = 0, ro = 1, lp = 0, ld = 0, hin = 0;

    if (ph === 0) {
      draw = easeOut(clamp(l * 1.1));
      lp = clamp((l - 0.5) / 0.3);
    } else if (ph === 1) {
      fo = 0.08;
      svgO = 1 - 0.9 * clamp(l / 0.2);
      r = ease(clamp(l / 0.9));
    } else if (ph === 2) {
      fo = 0.14;
      svgO = lerp(0.1, 1, clamp(l / 0.15));
      for (var k = 0; k < 4; k++) asm[k] = ease(clamp((l - 0.06 - DLY[k]) / 0.5));
      var all = Math.min(asm[0], asm[2], asm[3]);
      jo = clamp((all - 0.7) / 0.3);
      hin = clamp((all - 0.9) / 0.1);
      ro = 1 - clamp((l - 0.74) / 0.24);
    } else {
      fo = 0.16; asm = [1, 1, 1, 1]; ro = 0; jo = 0.4; hin = 1;
      dep = ease(clamp(l / 0.72));
      ld = clamp((l - 0.68) / 0.22);
    }

    cad.style.setProperty("--do", (1 - draw).toFixed(4));
    cad.style.setProperty("--fo", fo.toFixed(3));
    cad.style.setProperty("--jo", jo.toFixed(3));
    cad.style.setProperty("--ro", ro.toFixed(4));
    cad.style.opacity = (svgO * fadeK).toFixed(3);
    labParts.style.opacity = lp.toFixed(3);
    labDeploy.style.opacity = ld.toFixed(3);

    for (var i = 0; i < 4; i++) G[i].setAttribute("transform", "translate(" + (DX[i] * (1 - asm[i])).toFixed(2) + ",0)");
    var a = (88 * (1 - dep)).toFixed(2);
    wingU.setAttribute("transform", "translate(456,214) rotate(" + a + ")");
    wingL.setAttribute("transform", "translate(0,520) scale(1,-1) translate(456,214) rotate(" + a + ")");
    stabU.setAttribute("transform", "translate(736,236) rotate(" + a + ")");
    stabL.setAttribute("transform", "translate(0,520) scale(1,-1) translate(736,236) rotate(" + a + ")");
    hinge.setAttribute("opacity", hin.toFixed(2));

    cubaBox.style.setProperty("--r", r.toFixed(4));
    cubaPct.textContent = Math.round(r * 100) + " %";
    cubaWrap.classList.toggle("on", ph === 1);

    stepsEl.style.setProperty("--p", clamp(t / 4).toFixed(4));
    if (phShown !== lastPh) {
      lastPh = phShown;
      stepLis.forEach(function (li, k) { li.classList.toggle("on", k === phShown); });
      phSpans.forEach(function (s, k) { s.classList.toggle("on", k === phShown); });
      phNum.textContent = "0" + (phShown + 1) + " / 04";
    }
  }

  var PH_SECS = 3.4, HOLD_SECS = 3.2, holdT = 0, mRaf = 0, tLast = 0, mVisible = false;
  function mTick(now) {
    mRaf = 0;
    if (!mVisible) { tLast = 0; return; }
    var dt = tLast ? Math.min(0.05, (now - tLast) / 1000) : 0.016;
    tLast = now;
    if (T < 3.999) {
      T = Math.min(3.999, T + dt / PH_SECS);
      fadeK = 1;
    } else {
      holdT += dt;                                   /* pausa con el dron desplegado y luego vuelve a empezar */
      fadeK = 1 - clamp((holdT - (HOLD_SECS - 0.7)) / 0.7);
      if (holdT >= HOLD_SECS) { T = 0; holdT = 0; fadeK = 1; }
    }
    updateMont(T, Math.min(3, Math.floor(T)));
    mRaf = requestAnimationFrame(mTick);
  }
  function mStart() { if (!mRaf && mVisible && !reduce) { tLast = 0; mRaf = requestAnimationFrame(mTick); } }
  if (reduce) { T = 3.999; updateMont(T, 3); }
  else {
    updateMont(0, 0);
    var mVis = $("#montVis");
    if ("IntersectionObserver" in window && mVis) {
      new IntersectionObserver(function (es) {
        mVisible = es[0].isIntersecting; if (mVisible) mStart();
      }, { threshold: 0.25 }).observe(mVis);
    } else if (mVis) { mVisible = true; mStart(); }
  }
  /* clic en un paso: salta a esa fase y sigue sola */
  stepLis.forEach(function (li, k) {
    li.style.cursor = "pointer";
    li.addEventListener("click", function () { T = k + 0.001; holdT = 0; fadeK = 1; if (reduce) { T = k + 0.999; } updateMont(T, k); mStart(); });
  });

  /* ------------------------------------------------------------ scroll loop */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      navState();
      heroScroll();
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  navState();

  /* ------------------------------------------------------------ before/after slider */
  var cmp = $("#compare"), cmpRange = $("#compareRange");
  var cmpTouched = false;
  function setCmp(v) { cmp.style.setProperty("--x", v + "%"); }
  if (cmp && cmpRange) {
    cmpRange.addEventListener("input", function () { cmpTouched = true; setCmp(cmpRange.value); });
    ["pointerdown", "keydown", "touchstart"].forEach(function (ev) { cmp.addEventListener(ev, function () { cmpTouched = true; }, { passive: true }); });
    setCmp(50);
    if ("IntersectionObserver" in window && !reduce) {
      var cmpIO = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          cmpIO.disconnect();
          var t0 = performance.now(), dur = 4200;
          (function step(now) {
            if (cmpTouched) return;
            var t = clamp((now - t0) / dur);
            var v = 50 + Math.sin(t * Math.PI * 2) * 42 * (1 - t * 0.2);
            setCmp(v.toFixed(2)); cmpRange.value = v;
            if (t < 1) requestAnimationFrame(step); else { setCmp(50); cmpRange.value = 50; }
          })(t0);
        });
      }, { threshold: 0.6 });
      cmpIO.observe(cmp);
    }
  }

  /* ------------------------------------------------------------ ruler (0–1,5 mm, to scale) */
  (function () {
    var g = $("#rulerTicks"), ruler = $("#ruler");
    if (!g || !ruler) return;
    function build() {
      g.textContent = "";
      var en = document.documentElement.lang === "en";
      for (var i = 0; i <= 15; i++) {
        var x = i * 500 / 15, major = i % 5 === 0;
        var ln = document.createElementNS(SVGNS, "line");
        ln.setAttribute("x1", x); ln.setAttribute("x2", x);
        ln.setAttribute("y1", major ? 30 : 32); ln.setAttribute("y2", major ? 46 : 40);
        ln.setAttribute("class", "tick" + (major ? " m" : ""));
        g.appendChild(ln);
        if (major) {
          var tx = document.createElementNS(SVGNS, "text");
          tx.setAttribute("x", Math.min(Math.max(x, 4), 496)); tx.setAttribute("y", 64);
          tx.setAttribute("text-anchor", i === 0 ? "start" : (i === 15 ? "end" : "middle"));
          var v = String(i / 10).replace(".", en ? "." : ",");
          tx.textContent = v;
          g.appendChild(tx);
        }
      }
    }
    build();
    document.addEventListener("langchange", build);
    if ("IntersectionObserver" in window) {
      var rIO = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { ruler.classList.add("in"); rIO.disconnect(); } });
      }, { threshold: 0.6 });
      rIO.observe(ruler);
    } else ruler.classList.add("in");
  })();

  /* ------------------------------------------------------------ iteration race */
  (function () {
    var box = $("#race");
    if (!box) return;
    var fill = $("#moldFill"), c1 = $("#cur1"), c2 = $("#cur2"), c3 = $("#cur3"), cfTrack = $("#cfTrack"), dayEl = $("#raceDay"), amTrack = $("#amTrack");
    var mks = [];
    for (var k = 1; k <= 10; k++) {
      var m = document.createElement("span");
      m.className = "mk"; m.style.setProperty("--x", k * 10); m.textContent = "v" + k;
      amTrack.appendChild(m); mks.push(m);
    }
    var cks = [];
    for (var q = 1; q <= 3; q++) {
      var cm = document.createElement("span");
      cm.className = "mk cf"; cm.style.setProperty("--x", q * 100 / 3); cm.textContent = "v" + q;
      cfTrack.appendChild(cm); cks.push(cm);
    }
    var raf = 0;
    function set(t) {
      fill.style.setProperty("--t", t);
      c1.style.setProperty("--t", t); c2.style.setProperty("--t", t); c3.style.setProperty("--t", t);
      dayEl.textContent = Math.round(t * 150);
      mks.forEach(function (m, i) { m.classList.toggle("on", t >= (i + 1) / 10 - 0.002); });
      cks.forEach(function (m, i) { m.classList.toggle("on", t >= (i + 1) / 3 - 0.002); });
    }
    function run() {
      cancelAnimationFrame(raf);
      mks.forEach(function (m) { m.classList.remove("on"); }); cks.forEach(function (m) { m.classList.remove("on"); });
      if (reduce) { set(1); return; }
      var t0 = performance.now(), dur = 7000;
      set(0);
      (function step(now) {
        var t = clamp((now - t0) / dur);
        set(t);
        if (t < 1) raf = requestAnimationFrame(step);
      })(t0);
    }
    var started = false;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es, io) {
        es.forEach(function (e) { if (e.isIntersecting && !started) { started = true; run(); io.disconnect(); } });
      }, { threshold: 0.5 }).observe(box);
    } else { started = true; set(1); }
    $("#raceReplay").addEventListener("click", function () { started = true; run(); });
  })();


  /* ------------------------------------------------------------ ala por partes (imágenes + movimiento) */
  (function () {
    var box = $("#wx");
    if (!box) return;
    var cells = $$(".wx-c", box), cap = $("#wxCap");
    var step = 1, timer = 0, visible = false, manual = false, DUR = 4600;
    box.style.setProperty("--wx-t", DUR + "ms");
    function capSync() {
      var on = cells[step - 1];
      if (cap && on) cap.textContent = $(".wx-d", on).textContent;
    }
    function go(n) {
      step = n;
      box.setAttribute("data-step", n);
      cells.forEach(function (c, i) { c.setAttribute("aria-pressed", String(i + 1 === n)); });
      capSync();
    }
    document.addEventListener("langchange", capSync);
    function sched() {
      clearTimeout(timer);
      box.classList.remove("auto");
      if (manual || reduce || !visible) return;
      void box.offsetWidth; box.classList.add("auto");
      timer = setTimeout(function () { go(step % 3 + 1); sched(); }, step === 3 ? DUR + 1200 : DUR);
    }
    cells.forEach(function (c, i) {
      c.addEventListener("click", function () { manual = true; clearTimeout(timer); box.classList.remove("auto"); go(i + 1); });
    });
    if (reduce || !("IntersectionObserver" in window)) go(3);
    else {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible) { if (!manual) { go(1); } sched(); } else { clearTimeout(timer); box.classList.remove("auto"); }
      }, { threshold: 0.5 }).observe(box);
    }
    capSync();
  })();

  /* ------------------------------------------------------------ lightbox */
  var lb = $("#lb"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  var figs = $$("#gal figure");
  var lbIdx = 0;
  function lbShow(i) {
    lbIdx = (i + figs.length) % figs.length;
    var f = figs[lbIdx], im = $("img", f), cap = $("figcaption", f);
    lbImg.src = im.currentSrc || im.src;
    lbImg.alt = im.alt;
    lbCap.textContent = (cap ? cap.textContent : "") + "  ·  " + (lbIdx + 1) + " / " + figs.length;
  }
  function lbOpen(i) {
    if (!lb || typeof lb.showModal !== "function") return;
    lbShow(i);
    lb.showModal();
  }
  if (lb) {
    figs.forEach(function (f, i) {
      f.addEventListener("click", function () { lbOpen(i); });
      f.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); lbOpen(i); } });
    });
    $("#lbX").addEventListener("click", function () { lb.close(); });
    $("#lbP").addEventListener("click", function () { lbShow(lbIdx - 1); });
    $("#lbN").addEventListener("click", function () { lbShow(lbIdx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-in")) lb.close(); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") lbShow(lbIdx - 1);
      if (e.key === "ArrowRight") lbShow(lbIdx + 1);
    });
  }

  /* ------------------------------------------------------------ video */
  if (reduce) $$("video").forEach(function (v) { v.removeAttribute("autoplay"); v.pause(); });
  else if ("IntersectionObserver" in window) {
    $$("video").forEach(function (v) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); });
      }, { threshold: 0.2 }).observe(v);
    });
  }
})();

/* ---- Diseñar para MJF: calculadora de pared y guía de defectos ---- */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var tIn = $("wcTin"), dIn = $("wcDin");
  function num(n, d) {
    var s = n.toFixed(d);
    return document.documentElement.lang === "en" ? s : s.replace(".", ",");
  }
  function calc() {
    if (!tIn || !dIn) return;
    var t = parseFloat(tIn.value), d = parseFloat(dIn.value);
    var v = (2 * d) / (t * 1000) * 100;
    $("wcT").textContent = num(t, 1) + " mm";
    $("wcD").textContent = d + " µm";
    $("wcV").textContent = Math.round(v) + " %";
    var k = 150, cx = 170, w = t * k, g = (d / 1000) * k;
    var wall = $("wcWall"), gh = $("wcGhost");
    wall.setAttribute("x", (cx - w / 2).toFixed(1)); wall.setAttribute("width", w.toFixed(1));
    gh.setAttribute("x", (cx - w / 2 - g).toFixed(1)); gh.setAttribute("width", (w + 2 * g).toFixed(1));
    $("wcM1").hidden = !(v < 4);
    $("wcM2").hidden = !(v >= 4 && v < 12);
    $("wcM3").hidden = !(v >= 12);
  }
  if (tIn && dIn) {
    tIn.addEventListener("input", calc); dIn.addEventListener("input", calc);
    document.addEventListener("langchange", calc);
    calc();
  }
  var dg = $("dg");
  if (dg) {
    var tabs = Array.prototype.slice.call(dg.querySelectorAll('[role="tab"]'));
    var pick = function (tab, focus) {
      tabs.forEach(function (b) {
        var on = b === tab;
        b.setAttribute("aria-selected", on ? "true" : "false");
        b.tabIndex = on ? 0 : -1;
        $(b.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (b, i) {
      b.addEventListener("click", function () { pick(b, false); });
      b.addEventListener("keydown", function (e) {
        var n = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
        else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === "Home") n = tabs[0];
        else if (e.key === "End") n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); pick(n, true); }
      });
    });
  }
})();
