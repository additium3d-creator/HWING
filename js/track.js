/* Medición de visitas (Plausible, sin cookies) + eventos propios + atribución de QR/UTM.
   - Plausible cuenta pageviews y eventos; estos eventos se mantienen en un nº moderado por visita (≈6–10).
   - Atribución sin almacenar nada en el dispositivo: los parámetros utm_* de la URL se propagan a los enlaces internos
     y se añaden al formulario, al NDA y a Calendly para saber de qué QR/feria viene cada lead. */
(function () {
  "use strict";
  var KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref", "lang"];
  var attr = {};
  try { var q = new URLSearchParams(location.search); KEYS.forEach(function (k) { var v = q.get(k); if (v) attr[k] = v.slice(0, 80); }); } catch (e) {}

  function ev(name, props) {
    try { if (window.plausible) window.plausible(name, props ? { props: props } : undefined); } catch (e) {}
  }
  function lead() { /* solo origen comercial (sin lang) para formulario / NDA / Calendly */
    var o = {}; Object.keys(attr).forEach(function (k) { if (k !== "lang") o[k] = attr[k]; }); return o;
  }
  function leadText() {
    var o = lead(), k = Object.keys(o);
    return k.length ? k.map(function (x) { return x + "=" + o[x]; }).join("; ") : "directo / sin etiqueta";
  }
  window.HWTrack = { ev: ev, attr: attr, lead: lead, leadText: leadText };

  /* propagar etiquetas a enlaces internos */
  var ak = Object.keys(attr);
  if (ak.length) {
    document.querySelectorAll("a[href]").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || h.charAt(0) === "#" || /^[a-z][a-z0-9+.-]*:/i.test(h) || h.indexOf("//") === 0) return;
      if (!/^(index\.html|diseno\.html|privacidad\.html|\.\/|\/)?(\?|#|$)|^(index|diseno|privacidad)\.html/.test(h)) return;
      var hash = "", i = h.indexOf("#"); if (i > -1) { hash = h.slice(i); h = h.slice(0, i); }
      var u = h.split("?"), p = new URLSearchParams(u[1] || "");
      ak.forEach(function (k) { if (!p.has(k)) p.set(k, attr[k]); });
      a.setAttribute("href", (u[0] || "index.html") + "?" + p.toString() + hash);
    });
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (a) {
      var h = a.getAttribute("href") || "";
      if (h.indexOf("calendly.com") > -1) ev("Book Click", { where: a.closest(".nav") ? "nav" : a.closest(".hero") ? "hero" : a.closest(".cta") ? "cta" : "section" });
      else if (h.indexOf("mailto:") === 0) ev("Contact Click", { kind: "mail" });
      else if (h.indexOf("tel:") === 0) ev("Contact Click", { kind: "tel" });
      else if (h.indexOf("linkedin.com") > -1) ev("Contact Click", { kind: "linkedin" });
      else if (h.indexOf("additium3d.com") > -1) ev("Contact Click", { kind: "web" });
      else if (a.closest(".menu")) ev("Nav", { item: h.replace(/^.*#/, "") || h });
    }
    if (e.target.closest && e.target.closest(".lang button")) ev("Lang", { to: e.target.closest(".lang button").getAttribute("data-lang") });
    if (e.target.closest && e.target.closest(".fu-overlay button, .fu-ctl button") && !window.__hwVid) { window.__hwVid = 1; ev("Video Play", { id: "fusi" }); }
    if (e.target.closest && e.target.closest("#gal") && !window.__hwGal) { window.__hwGal = 1; ev("Gallery Open"); }
  }, true);

  var once = {};
  function first(name, props, key) { if (once[key || name]) return; once[key || name] = 1; ev(name, props); }
  document.addEventListener("input", function (e) {
    if (e.target.id === "compareRange") first("Compare Slider");
    if (e.target.closest && e.target.closest("#wcalc")) first("Calculator");
  }, true);

  /* secciones vistas (una vez por sección) */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { io.unobserve(en.target); ev("Section", { id: en.target.id }); } });
    }, { threshold: 0.35 });
    document.querySelectorAll("section[id], .scrubwrap[id]").forEach(function (s) { io.observe(s); });
  }
})();
