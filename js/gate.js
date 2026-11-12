/* Gate: pantalla de Fusi (quiénes somos / qué NO hacemos) + NDA con firma electrónica sencilla,
   antes de reservar reunión (Calendly) o de enviar el formulario de contacto.
   Envío del NDA firmado a info@additium3d.com vía FormSubmit (AJAX) + copia PDF descargable (jsPDF, carga diferida). */
(function () {
  "use strict";

  var MAIL = "info@additium3d.com";
  var ENDPOINT = "https://formsubmit.co/ajax/" + MAIL;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function tr(n, p) { if (window.HWTrack) window.HWTrack.ev(n, p); }
  function L() { return (window.I18N && window.I18N.lang === "es") ? "es" : "en"; }
  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) {} return null; }
  var REDUCED = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- textos ---------------- */
  var T = {
    es: {
      close: "Cerrar", back: "Atrás",
      "i.tag": "Antes de reservar",
      "i.title": "Somos un <em>equipo de ingeniería</em> y <em>fabricantes de piezas de plástico</em>",
      "i.yes": "Qué hacemos",
      "i.y1": "Adaptamos tu desarrollo a fabricación aditiva (diseño para MJF, SLS, FDM y SLA).",
      "i.y2": "Fabricamos tus piezas de plástico: finales, de montaje y útiles, en serie.",
      "i.y3": "Postprocesado y acabado, hasta que la pieza llega lista para montar.",
      "i.no": "Qué NO hacemos",
      "i.n1": "No desarrollamos drones ni productos completos. El H-WING es nuestro demostrador tecnológico.",
      "i.n2": "No fabricamos piezas metálicas: ni impresión 3D en metal ni mecanizado.",
      "i.n3": "No hacemos electrónica, software ni integración de sistemas.",
      "i.btn": "Entendido, continuar",
      "b.info": "¡Hola! Soy Fusi. Antes de reservar, te cuento qué hacemos… y qué no.",
      "b.nda": "¿Firmamos un NDA ahora? Así llegas a la reunión con todo protegido.",
      "b.done": "¡Listo! Ya vamos protegidos.",
      "n.tag": "NDA mutuo",
      "n.title": "¿Vamos a la reunión <em>protegidos?</em>",
      "n.text": "Rellena unos datos y firma con el dedo o el ratón en 2 minutos. Todo lo que nos cuentes queda cubierto por un acuerdo de confidencialidad desde el primer minuto. Es opcional.",
      "n.sign": "Firmar NDA ahora", "n.skip": "Continuar sin NDA",
      "n.note": "Si prefieres, pídenos el NDA por email en " + MAIL + ".",
      "d.tag": "NDA · Paso 1 de 2", "d.title": "Datos de tu empresa",
      "d.empresa": "Razón social", "d.pais": "País (nacionalidad de la sociedad)", "d.domicilio": "Domicilio social", "d.cif": "CIF / NIF / VAT",
      "d.registro": "Datos registrales (opcional)", "d.registro.ph": "Registro Mercantil, tomo, folio, hoja…",
      "d.rep": "Nombre y apellidos del firmante", "d.repid": "DNI / NIE / pasaporte del firmante", "d.cargo": "Cargo del firmante", "d.email": "Email",
      "d.next": "Ver y firmar el NDA", "d.req": "Rellena los campos obligatorios.",
      "s.tag": "NDA · Paso 2 de 2", "s.title": "Lee y firma",
      "s.hint": "Desplázate por el texto. Después firma abajo.",
      "s.sig": "Tu firma (dibuja con el dedo o el ratón)", "s.clear": "Borrar firma",
      "s.name": "Escribe tu nombre completo",
      "s.ok": "Declaro que tengo poder para obligar a mi empresa y acepto firmar este NDA electrónicamente. <a href=\"privacidad.html\" target=\"_blank\" rel=\"noopener\">Privacidad</a>.",
      "s.btn": "Firmar y enviar", "s.sending": "Firmando…",
      "s.req": "Falta la firma dibujada, tu nombre o aceptar la declaración.",
      "x.tag": "NDA firmado", "x.title": "Listo, <em>ya estamos protegidos</em>",
      "x.text": "Hemos recibido tu NDA. Lo contrafirmaremos y te enviaremos una copia a tu email. Mientras tanto, aquí tienes tu copia.",
      "x.warn": "No hemos podido enviar el NDA a nuestro servidor. Descarga el PDF y envíalo a " + MAIL + ".",
      "x.pdf": "Descargar copia PDF", "x.pdfwait": "Preparando PDF…",
      "x.cal": "Reservar 30 min", "x.form": "Enviar mi mensaje", "x.close": "Cerrar",
      "c.cal": "Continuar a reservar →", "c.form": "Continuar y enviar mensaje →",
      "pdf.p": "Página", "pdf.of": "de", "pdf.signed": "Firmado electrónicamente en dronesmjf.com", "pdf.at": "Fecha y hora", "pdf.hash": "Huella SHA-256 del texto",
      "pdf.sigR": "Firma de la Colaboradora"
    },
    en: {
      close: "Close", back: "Back",
      "i.tag": "Before you book",
      "i.title": "We are an <em>engineering team</em> and <em>manufacturers of plastic parts</em>",
      "i.yes": "What we do",
      "i.y1": "We adapt your development to additive manufacturing (design for MJF, SLS, FDM and SLA).",
      "i.y2": "We manufacture your plastic parts: end-use, assembly and tooling, in series.",
      "i.y3": "Post-processing and finishing, until the part arrives ready to assemble.",
      "i.no": "What we DON'T do",
      "i.n1": "We don't develop drones or complete products. The H-WING is our technology demonstrator.",
      "i.n2": "We don't make metal parts: no metal 3D printing and no machining.",
      "i.n3": "We don't do electronics, software or systems integration.",
      "i.btn": "Got it, continue",
      "b.info": "Hi! I'm Fusi. Before you book, here's what we do… and what we don't.",
      "b.nda": "Shall we sign an NDA now? You'll walk into the meeting fully protected.",
      "b.done": "Done! We're protected.",
      "n.tag": "Mutual NDA",
      "n.title": "Go into the meeting <em>protected?</em>",
      "n.text": "Fill in a few details and sign with your finger or mouse in 2 minutes. Everything you tell us is covered by a confidentiality agreement from minute one. It's optional.",
      "n.sign": "Sign NDA now", "n.skip": "Continue without NDA",
      "n.note": "Or ask us for the NDA by email at " + MAIL + ".",
      "d.tag": "NDA · Step 1 of 2", "d.title": "Your company details",
      "d.empresa": "Company name", "d.pais": "Country (nationality of the company)", "d.domicilio": "Registered address", "d.cif": "Tax ID / VAT number",
      "d.registro": "Registry details (optional)", "d.registro.ph": "Commercial registry, volume, folio, sheet…",
      "d.rep": "Signatory's full name", "d.repid": "Signatory's ID / passport number", "d.cargo": "Signatory's position", "d.email": "Email",
      "d.next": "Review and sign the NDA", "d.req": "Please fill in the required fields.",
      "s.tag": "NDA · Step 2 of 2", "s.title": "Read and sign",
      "s.hint": "Scroll through the text, then sign below.",
      "s.sig": "Your signature (draw with finger or mouse)", "s.clear": "Clear signature",
      "s.name": "Type your full name",
      "s.ok": "I declare that I have authority to bind my company and agree to sign this NDA electronically. <a href=\"privacidad.html\" target=\"_blank\" rel=\"noopener\">Privacy</a>.",
      "s.btn": "Sign and send", "s.sending": "Signing…",
      "s.req": "Missing drawn signature, your name or the declaration.",
      "x.tag": "NDA signed", "x.title": "Done, <em>we're protected</em>",
      "x.text": "We've received your NDA. We'll countersign it and email you a copy. In the meantime, here is your copy.",
      "x.warn": "We couldn't send the NDA to our server. Download the PDF and email it to " + MAIL + ".",
      "x.pdf": "Download PDF copy", "x.pdfwait": "Preparing PDF…",
      "x.cal": "Book 30 min", "x.form": "Send my message", "x.close": "Close",
      "c.cal": "Continue to booking →", "c.form": "Continue and send message →",
      "pdf.p": "Page", "pdf.of": "of", "pdf.signed": "Electronically signed at dronesmjf.com", "pdf.at": "Date and time", "pdf.hash": "SHA-256 fingerprint of the text",
      "pdf.sigR": "Collaborator's signature"
    }
  };
  function t(k) { return T[L()][k]; }

  /* ---------------- Fusi (SVG, mismo personaje que el vídeo) ---------------- */
  var FUSI = '<svg class="gf-svg" viewBox="-250 -430 500 450" role="img" aria-label="Fusi">' +
    '<defs><radialGradient id="gf-iris" cx=".45" cy=".4" r=".6"><stop offset="0" stop-color="#6ff0d8"/><stop offset=".6" stop-color="#27a9c9"/><stop offset="1" stop-color="#1f46e0"/></radialGradient>' +
    '<linearGradient id="gf-brand" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#1f46e0"/><stop offset="1" stop-color="#27cfb2"/></linearGradient></defs>' +
    '<g id="gf-root"><ellipse id="gf-shadow" cx="0" cy="0" rx="200" ry="16" fill="#000" opacity=".28"/><g id="gf-body">' +
    '<rect x="-175" y="-24" width="46" height="24" rx="8" fill="#1f232b"/><rect x="120" y="-24" width="46" height="24" rx="8" fill="#1f232b"/>' +
    '<g id="gf-armL"><rect x="-72" y="-13" width="80" height="26" rx="13" fill="#dfe3ea" stroke="#1b1f27" stroke-width="5"/><circle cx="-80" cy="0" r="20" fill="#f3f5f8" stroke="#1b1f27" stroke-width="5"/></g>' +
    '<g id="gf-armR"><rect x="-8" y="-13" width="80" height="26" rx="13" fill="#dfe3ea" stroke="#1b1f27" stroke-width="5"/><circle cx="80" cy="0" r="20" fill="#f3f5f8" stroke="#1b1f27" stroke-width="5"/></g>' +
    '<rect x="-215" y="-300" width="430" height="282" rx="44" fill="#f3f5f8" stroke="#1b1f27" stroke-width="6"/><rect x="118" y="-288" width="86" height="258" rx="28" fill="#e2e6ec"/><rect x="150" y="-265" width="8" height="110" rx="4" fill="#c2c9d4"/>' +
    '<circle cx="161" cy="-100" r="22" fill="#f5c518"/><circle cx="161" cy="-100" r="14" fill="#e0312b"/>' +
    '<rect x="-152" y="-398" width="72" height="60" rx="12" fill="#2b303b" stroke="#1b1f27" stroke-width="6"/><rect x="-200" y="-345" width="400" height="62" rx="26" fill="#2b303b" stroke="#1b1f27" stroke-width="6"/><rect x="-30" y="-322" width="190" height="12" rx="6" fill="#171a21"/>' +
    '<rect x="-178" y="-272" width="276" height="128" rx="58" fill="#0f131b" stroke="#1b1f27" stroke-width="5"/>' +
    '<circle cx="-105" cy="-205" r="38" fill="#fff"/><g id="gf-pupL"><circle cx="-105" cy="-205" r="22" fill="url(#gf-iris)"/><circle cx="-105" cy="-205" r="11" fill="#0a0d14"/><circle cx="-97" cy="-213" r="6" fill="#fff"/></g><rect id="gf-lidL" x="-145" y="-245" width="80" height="0" fill="#0f131b"/>' +
    '<circle cx="25" cy="-205" r="38" fill="#fff"/><g id="gf-pupR"><circle cx="25" cy="-205" r="22" fill="url(#gf-iris)"/><circle cx="25" cy="-205" r="11" fill="#0a0d14"/><circle cx="33" cy="-213" r="6" fill="#fff"/></g><rect id="gf-lidR" x="-15" y="-245" width="80" height="0" fill="#0f131b"/>' +
    '<path d="M-128 -255 L-82 -255" stroke="#35d6b6" stroke-width="6" stroke-linecap="round"/><path d="M2 -255 L48 -255" stroke="#35d6b6" stroke-width="6" stroke-linecap="round"/>' +
    '<rect x="-190" y="-132" width="296" height="98" rx="18" fill="#e7eaf0" stroke="#cfd5de" stroke-width="3"/><path id="gf-mouth" fill="#1b1f27"/>' +
    '<ellipse cx="-160" cy="-120" rx="18" ry="11" fill="#ff8fa0" opacity=".45"/><ellipse cx="78" cy="-120" rx="18" ry="11" fill="#ff8fa0" opacity=".45"/>' +
    '<rect x="-102" y="-58" width="120" height="8" rx="4" fill="url(#gf-brand)"/></g></g></svg>';

  var raf = 0, talkUntil = 0, waveUntil = 0, t0 = 0;
  function fusiFrame(ts) {
    if (!state.open) { raf = 0; return; }
    var t = ts / 1000, F = state.f;
    var hop = REDUCED ? 0 : Math.abs(Math.sin(t * 2.1)) * 12;
    var sq = REDUCED ? 0 : (hop < 2 ? 0.02 : 0);
    F.body.setAttribute("transform", "translate(0," + (-hop) + ") scale(" + (1 + sq) + "," + (1 - sq) + ")");
    F.shadow.setAttribute("rx", 200 * (1 - hop / 400));
    var ph = t % 3.6, lid = ph < 0.16 ? Math.sin(ph / 0.16 * Math.PI) : 0;
    F.lidL.setAttribute("height", 80 * lid); F.lidR.setAttribute("height", 80 * lid);
    var pt = "translate(" + (Math.sin(t * 0.8) * 7) + "," + (Math.cos(t * 0.6) * 3) + ")";
    F.pupL.setAttribute("transform", pt); F.pupR.setAttribute("transform", pt);
    var talk = (!REDUCED && ts < talkUntil) ? (0.5 + 0.5 * Math.sin(t * 16)) * (0.55 + 0.45 * Math.sin(t * 5.1)) : 0;
    var w = 48;
    F.mouth.setAttribute("d", "M" + (-42 - w) + " -114 Q-42 " + (-114 + 6) + " " + (-42 + w) + " -114 Q-42 " + (-114 + 18 + talk * 46) + " " + (-42 - w) + " -114Z");
    var wave = (!REDUCED && ts < waveUntil) ? 28 + Math.sin(t * 10) * 22 : 0;
    F.armL.setAttribute("transform", "translate(-215,-150) rotate(-20)");
    F.armR.setAttribute("transform", "translate(215,-150) rotate(" + (20 - wave) + ")");
    raf = requestAnimationFrame(fusiFrame);
  }
  function fusiSay(key) {
    var b = $("#gateBubble"); if (b) { b.textContent = t(key); b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); }
    var now = performance.now(); talkUntil = now + 2600; waveUntil = key === "b.info" || key === "b.done" ? now + 2200 : 0;
  }

  /* ---------------- DOM ---------------- */
  var state = { open: false, step: "info", action: null, f: null, data: {}, sig: null, lastFocus: null, ink: false, sent: null, pdf: null };
  var root;

  function build() {
    root = document.createElement("div");
    root.className = "gate"; root.hidden = true; root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.setAttribute("aria-labelledby", "gateTitle");
    root.innerHTML =
      '<div class="gate-card" id="gateCard">' +
      '<button type="button" class="gate-x" data-act="close" aria-label="Cerrar">✕</button>' +
      '<aside class="gate-fusi" id="gateFusi"><div class="gate-bubble" id="gateBubble"></div>' + FUSI + '</aside>' +
      '<div class="gate-main">' +

      '<section data-step="info"><p class="eyebrow" data-g="i.tag"></p><h2 class="gate-h" id="gateTitle" data-g="i.title"></h2>' +
      '<div class="gate-cols"><div class="gate-col yes"><h3 data-g="i.yes"></h3><ul>' +
      '<li style="--i:0"><span class="ic">✓</span><span data-g="i.y1"></span></li><li style="--i:1"><span class="ic">✓</span><span data-g="i.y2"></span></li><li style="--i:2"><span class="ic">✓</span><span data-g="i.y3"></span></li></ul></div>' +
      '<div class="gate-col no"><h3 data-g="i.no"></h3><ul>' +
      '<li style="--i:3"><span class="ic">✕</span><span data-g="i.n1"></span></li><li style="--i:4"><span class="ic">✕</span><span data-g="i.n2"></span></li><li style="--i:5"><span class="ic">✕</span><span data-g="i.n3"></span></li></ul></div></div>' +
      '<div class="gate-act"><button type="button" class="btn primary" data-act="toNda"><span data-g="i.btn"></span> <span class="arr" aria-hidden="true">→</span></button></div></section>' +

      '<section data-step="nda"><p class="eyebrow" data-g="n.tag"></p><h2 class="gate-h" data-g="n.title"></h2><p class="gate-p" data-g="n.text"></p>' +
      '<div class="gate-act"><button type="button" class="btn primary" data-act="toData"><span data-g="n.sign"></span> <span class="arr" aria-hidden="true">→</span></button>' +
      '<button type="button" class="btn" data-act="skip" id="gateSkip"></button></div><p class="gate-note" data-g="n.note"></p></section>' +

      '<section data-step="data"><p class="eyebrow" data-g="d.tag"></p><h2 class="gate-h sm" data-g="d.title"></h2>' +
      '<form id="gateData" novalidate><div class="cf-grid">' +
      fld("empresa", "d.empresa", "text", "organization", true, true) + fld("cif", "d.cif", "text", "off", true) + fld("pais", "d.pais", "text", "country-name", true) +
      fld("domicilio", "d.domicilio", "text", "street-address", true, true) + fld("registro", "d.registro", "text", "off", false, true, "d.registro.ph") +
      fld("rep", "d.rep", "text", "name", true) + fld("repid", "d.repid", "text", "off", true) + fld("cargo", "d.cargo", "text", "organization-title", true) + fld("email", "d.email", "email", "email", true) +
      '</div><p class="cf-st err" id="gateDataSt" role="status"></p>' +
      '<div class="gate-act"><button type="button" class="btn" data-act="toNdaBack"><span data-g="back"></span></button><button type="submit" class="btn primary"><span data-g="d.next"></span> <span class="arr" aria-hidden="true">→</span></button></div></form></section>' +

      '<section data-step="sign"><p class="eyebrow" data-g="s.tag"></p><h2 class="gate-h sm" data-g="s.title"></h2><p class="gate-hint" data-g="s.hint"></p>' +
      '<div class="gate-doc" id="gateDoc" tabindex="0"></div>' +
      '<div class="gate-sigbox"><span class="gate-lbl" data-g="s.sig"></span><div class="gate-pad"><canvas id="gateSig" aria-label="Firma"></canvas></div>' +
      '<button type="button" class="gate-lnk" data-act="clearSig" data-g="s.clear"></button></div>' +
      '<label class="cf-f"><span data-g="s.name"></span><input type="text" id="gateSignName" autocomplete="name"></label>' +
      '<label class="cf-c"><input type="checkbox" id="gateOk"><span data-g="s.ok"></span></label>' +
      '<p class="cf-st err" id="gateSignSt" role="status"></p>' +
      '<div class="gate-act"><button type="button" class="btn" data-act="toDataBack"><span data-g="back"></span></button><button type="button" class="btn primary" id="gateSignBtn" data-act="sign"><span data-g="s.btn"></span> <span class="arr" aria-hidden="true">→</span></button></div></section>' +

      '<section data-step="done"><p class="eyebrow" data-g="x.tag"></p><h2 class="gate-h" data-g="x.title"></h2><p class="gate-p" id="gateDoneTxt"></p>' +
      '<div class="gate-act"><button type="button" class="btn" data-act="pdf" id="gatePdf"></button><a class="btn primary" id="gateGo" target="_blank" rel="noopener" data-act="go"></a></div></section>' +
      '</div></div>';
    document.body.appendChild(root);

    state.f = { body: $("#gf-body"), shadow: $("#gf-shadow"), lidL: $("#gf-lidL"), lidR: $("#gf-lidR"), pupL: $("#gf-pupL"), pupR: $("#gf-pupR"), mouth: $("#gf-mouth"), armL: $("#gf-armL"), armR: $("#gf-armR") };

    root.addEventListener("click", function (e) {
      if (e.target === root && !state.busy) return close();
      var b = e.target.closest("[data-act]"); if (!b) return;
      var a = b.getAttribute("data-act");
      if (a === "close") close();
      else if (a === "toNda") go("nda");
      else if (a === "toNdaBack") go("nda");
      else if (a === "toData") go("data");
      else if (a === "toDataBack") go("data");
      else if (a === "skip") { proceed(false); }
      else if (a === "clearSig") clearSig();
      else if (a === "sign") doSign();
      else if (a === "pdf") makePdfDownload();
      else if (a === "go") {
        if (state.action.type === "form") { e.preventDefault(); proceed(true); }
        else { tr("NDA Done", { flow: "calendly" }); tr("Calendly Open", { nda: "yes" }); setTimeout(function () { close(true); }, 50); }
      }
    });
    $("#gateData").addEventListener("submit", function (e) { e.preventDefault(); nextData(); });
    document.addEventListener("keydown", function (e) {
      if (!state.open) return;
      if (e.key === "Escape" && !state.busy) { close(); return; }
      if (e.key === "Tab") trap(e);
    });
    document.addEventListener("langchange", function () { if (state.open) { apply(); if (state.step === "sign") renderDoc(); } });
    setupPad();
  }

  function fld(name, key, type, ac, req, wide, ph) {
    return '<label class="cf-f' + (wide ? " cf-w" : "") + '"><span data-g="' + key + '"></span><input type="' + type + '" name="' + name + '" autocomplete="' + ac + '"' + (req ? " required" : "") + (ph ? ' data-gph="' + ph + '"' : "") + "></label>";
  }
  function apply() {
    $$("[data-g]", root).forEach(function (el) { el.innerHTML = t(el.getAttribute("data-g")); });
    $$("[data-gph]", root).forEach(function (el) { el.placeholder = t(el.getAttribute("data-gph")); });
    $(".gate-x", root).setAttribute("aria-label", t("close"));
    $("#gateSkip").textContent = t("n.skip");
    var go = $("#gateGo"), pdf = $("#gatePdf"), isForm = state.action && state.action.type === "form";
    go.textContent = isForm ? t("x.form") : t("x.cal");
    go.setAttribute("href", isForm || !state.action ? "#" : calUrl());
    pdf.textContent = t("x.pdf"); pdf.hidden = !state.pdf;
    $("#gateDoneTxt").textContent = state.sent === false ? t("x.warn") : t("x.text");
    $("#gateDoneTxt").classList.toggle("warn", state.sent === false);
  }

  function go(step) {
    state.step = step; tr("Gate Step", { step: step });
    $$("section[data-step]", root).forEach(function (s) { s.hidden = s.getAttribute("data-step") !== step; });
    $("#gateCard").setAttribute("data-step", step);
    var fusiOn = step === "info" || step === "nda" || step === "done";
    $("#gateFusi").hidden = !fusiOn;
    if (step === "info") fusiSay("b.info"); else if (step === "nda") fusiSay("b.nda"); else if (step === "done") fusiSay("b.done");
    if (step === "info") { var s = $('[data-step="info"]', root); $$("li", s).forEach(function (li) { li.style.animation = "none"; void li.offsetWidth; li.style.animation = ""; }); }
    if (step === "sign") { renderDoc(); setTimeout(sizePad, 30); }
    $("#gateCard").scrollTop = 0;
    var h = $('[data-step="' + step + '"] .gate-h', root); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }

  /* ---------------- abrir / cerrar ---------------- */
  function open(action) {
    if (!root) build();
    tr("Gate Open", { type: action.type });
    state.action = action; state.sent = null; state.pdf = null; state.busy = false;
    state.data = {}; Object.keys(action.prefill || {}).forEach(function (k) { if (action.prefill[k]) state.data[k] = action.prefill[k]; });
    state.lastFocus = document.activeElement;
    root.hidden = false; state.open = true;
    document.documentElement.style.overflow = "hidden";
    apply();
    $$("#gateData input").forEach(function (i) { i.value = state.data[i.name] || ""; });
    $("#gateSignName").value = state.data.rep || ""; $("#gateOk").checked = false; $("#gateSignSt").textContent = ""; $("#gateDataSt").textContent = "";
    var signed = ss("hw-nda");
    if (signed) { state.sent = true; go("done"); }
    else go(ss("hw-gate-info") ? "nda" : "info");
    ss("hw-gate-info", "1");
    if (!raf) raf = requestAnimationFrame(fusiFrame);
  }
  function close(done) {
    if (!root) return;
    root.hidden = true; state.open = false;
    document.documentElement.style.overflow = "";
    if (state.lastFocus && state.lastFocus.focus) try { state.lastFocus.focus(); } catch (e) {}
  }
  function trap(e) {
    var f = $$("button:not([disabled]),a[href],input:not([disabled]),canvas,[tabindex]:not([tabindex='-1'])", root).filter(function (x) { return x.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* continuar con la acción original (reservar / enviar formulario) */
  function calUrl() {
    var u = state.action.url, q = [];
    if (state.data.rep) q.push("name=" + encodeURIComponent(state.data.rep));
    if (state.data.email) q.push("email=" + encodeURIComponent(state.data.email));
    var lead = window.HWTrack ? window.HWTrack.lead() : {};
    Object.keys(lead).forEach(function (k) { if (k.indexOf("utm_") === 0) q.push(k + "=" + encodeURIComponent(lead[k])); });
    return q.length ? u + (u.indexOf("?") > -1 ? "&" : "?") + q.join("&") : u;
  }
  function proceed(signed) {
    var a = state.action;
    tr(signed ? "NDA Done" : "NDA Skip", { flow: a.type });
    if (a.type === "calendly") { tr("Calendly Open", { nda: signed ? "yes" : "no" }); window.open(calUrl(), "_blank", "noopener"); }
    else if (a.type === "form") { a.run({ nda: signed ? "FIRMADO " + (ss("hw-nda") || "") : "No" }); }
    close(true);
  }

  /* ---------------- NDA: datos y texto ---------------- */
  function nextData() {
    var f = $("#gateData"), st = $("#gateDataSt");
    if (!f.checkValidity()) { f.reportValidity(); st.textContent = t("d.req"); return; }
    st.textContent = "";
    $$("input", f).forEach(function (i) { state.data[i.name] = i.value.trim(); });
    $("#gateSignName").value = state.data.rep;
    go("sign");
  }
  function filled() {
    var d = state.data, es = L() === "es", N = window.NDA_TEXT[L()];
    var reg = d.registro ? (es ? " Inscrita en: " : " Registered at: ") + d.registro.replace(/[.\s]+$/, "") + "." : "";
    var map = { empresa: d.empresa, pais: d.pais, domicilio: d.domicilio, cif: d.cif, registro: reg, rep: d.rep, repid: d.repid, cargo: d.cargo, email: d.email };
    function f(s) { return s.replace(/\{(\w+)\}/g, function (m, k) { return map[k] !== undefined ? map[k] : m; }); }
    return { title: N.title, blocks: N.blocks.map(function (b) { return { k: b.k, t: f(b.t) }; }), N: N };
  }
  function renderDoc() {
    var box = $("#gateDoc"), D = filled(); box.textContent = "";
    var h = document.createElement("h3"); h.textContent = D.title; box.appendChild(h);
    D.blocks.forEach(function (b) {
      var el = document.createElement(b.k === "h" ? "h4" : "p"); if (b.k === "li") el.className = "li"; el.textContent = b.t; box.appendChild(el);
    });
  }

  /* ---------------- firma (canvas) ---------------- */
  var pad = { c: null, ctx: null, down: false, lx: 0, ly: 0 };
  function setupPad() {
    pad.c = $("#gateSig"); pad.ctx = pad.c.getContext("2d");
    function pos(e) { var r = pad.c.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
    pad.c.addEventListener("pointerdown", function (e) { e.preventDefault(); pad.c.setPointerCapture(e.pointerId); pad.down = true; var p = pos(e); pad.lx = p[0]; pad.ly = p[1]; dot(p[0], p[1]); state.ink = true; });
    pad.c.addEventListener("pointermove", function (e) {
      if (!pad.down) return; e.preventDefault(); var p = pos(e), x = pad.ctx;
      x.beginPath(); x.moveTo(pad.lx, pad.ly); x.lineTo(p[0], p[1]); x.stroke(); pad.lx = p[0]; pad.ly = p[1];
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach(function (ev) { pad.c.addEventListener(ev, function () { pad.down = false; }); });
    window.addEventListener("resize", function () { if (state.open && state.step === "sign") sizePad(true); });
  }
  function dot(x, y) { pad.ctx.beginPath(); pad.ctx.arc(x, y, 1.1, 0, 7); pad.ctx.fillStyle = pad.ctx.strokeStyle; pad.ctx.fill(); }
  function sizePad(keep) {
    var r = pad.c.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (keep && pad.c.width === Math.round(r.width * dpr)) return;
    pad.c.width = Math.round(r.width * dpr); pad.c.height = Math.round(r.height * dpr);
    pad.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); pad.ctx.lineWidth = 2.4; pad.ctx.lineCap = "round"; pad.ctx.lineJoin = "round"; pad.ctx.strokeStyle = "#0b1b3a";
    state.ink = false;
  }
  function clearSig() { pad.ctx.clearRect(0, 0, pad.c.width, pad.c.height); state.ink = false; }
  function sigPng() {
    /* fondo blanco para el PDF */
    var o = document.createElement("canvas"); o.width = pad.c.width; o.height = pad.c.height;
    var x = o.getContext("2d"); x.fillStyle = "#fff"; x.fillRect(0, 0, o.width, o.height); x.drawImage(pad.c, 0, 0);
    return { url: o.toDataURL("image/png"), w: o.width, h: o.height };
  }

  /* ---------------- firmar: hash, PDF, envío ---------------- */
  function sha256(s) {
    try {
      return crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)).then(function (b) {
        return Array.prototype.map.call(new Uint8Array(b), function (x) { return ("0" + x.toString(16)).slice(-2); }).join("");
      });
    } catch (e) { return Promise.resolve("n/a"); }
  }
  function loadJsPdf() {
    if (window.jspdf) return Promise.resolve();
    return new Promise(function (res, rej) {
      var s = document.createElement("script"); s.src = "js/vendor/jspdf.umd.min.js"; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  }
  function stamp() {
    var d = new Date(), p = function (n) { return ("0" + n).slice(-2); };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes()) + " (" + (Intl.DateTimeFormat().resolvedOptions().timeZone || "local") + ")";
  }
  function buildPdf(sig, name, when, hash) {
    var D = filled(), N = D.N, J = window.jspdf.jsPDF, doc = new J({ unit: "mm", format: "a4" });
    var W = 210, H = 297, M = 20, TW = W - 2 * M, y = M;
    function par(txt, o) {
      o = o || {}; var size = o.size || 9; doc.setFont("helvetica", o.bold ? "bold" : "normal"); doc.setFontSize(size);
      var lines = doc.splitTextToSize(txt, TW - (o.indent || 0)), lh = size * 0.3528 * 1.38;
      if (o.before) y += o.before;
      lines.forEach(function (ln) { if (y + lh > H - 18) { doc.addPage(); y = M; } doc.text(ln, o.center ? W / 2 : M + (o.indent || 0), y, o.center ? { align: "center" } : undefined); y += lh; });
      y += o.after === undefined ? 1.6 : o.after;
    }
    doc.setTextColor(20, 24, 30);
    par(D.title, { bold: true, size: 15, center: true, after: 2 });
    par("Additium3D · dronesmjf.com", { size: 8.5, center: true, after: 6 });
    var ref = L() === "es" ? "En Valencia, a " : "In Valencia, on "; par(ref + when.slice(0, 10) + ".", { after: 4 });
    D.blocks.forEach(function (b) {
      if (b.k === "h") par(b.t, { bold: true, size: 10, before: 2.5, after: 1.4 });
      else if (b.k === "li") par(b.t, { indent: 6 });
      else par(b.t);
    });
    if (y > H - 80) { doc.addPage(); y = M; } y += 8;
    var colW = TW / 2 - 6, top = y;
    doc.setFont("helvetica", "bold"); doc.setFontSize(9.5);
    doc.text(N.sigL[0], M, top); doc.text(N.sigR, M + TW / 2 + 6, top);
    doc.setFont("helvetica", "normal"); doc.setFontSize(9);
    doc.text(N.sigL[1], M, top + 6); doc.text(N.sigL[2], M, top + 11); doc.setTextColor(120, 120, 120); doc.text(N.sigL[3], M, top + 22); doc.setTextColor(20, 24, 30);
    var sh = Math.min(26, colW * sig.h / sig.w); doc.addImage(sig.url, "PNG", M + TW / 2 + 6, top + 3, colW, sh);
    doc.setDrawColor(150); doc.line(M + TW / 2 + 6, top + 3 + sh + 1, M + TW - 0, top + 3 + sh + 1);
    var yy = top + 3 + sh + 6;
    doc.text(name + " · " + state.data.cargo, M + TW / 2 + 6, yy); doc.text(state.data.empresa, M + TW / 2 + 6, yy + 5); doc.text(state.data.email, M + TW / 2 + 6, yy + 10);
    doc.setFontSize(8); doc.setTextColor(90, 90, 90);
    doc.text(t("pdf.at") + ": " + when, M + TW / 2 + 6, yy + 16);
    var n = doc.getNumberOfPages();
    for (var i = 1; i <= n; i++) {
      doc.setPage(i); doc.setFontSize(7.5); doc.setTextColor(120, 120, 120);
      doc.text(t("pdf.signed") + " · " + t("pdf.hash") + ": " + hash.slice(0, 32) + "…", M, H - 10);
      doc.text(t("pdf.p") + " " + i + " " + t("pdf.of") + " " + n, W - M, H - 10, { align: "right" });
    }
    return doc;
  }
  function safe(s) { return s.replace(/[^\w\-]+/g, "_").slice(0, 40); }

  function doSign() {
    var name = $("#gateSignName").value.trim(), st = $("#gateSignSt");
    if (!state.ink || !name || !$("#gateOk").checked) { st.textContent = t("s.req"); return; }
    st.textContent = ""; state.busy = true;
    var btn = $("#gateSignBtn"); btn.disabled = true; $("span", btn).textContent = t("s.sending");
    var sig = sigPng(), when = stamp(), D = filled();
    var full = D.title + "\n\n" + D.blocks.map(function (b) { return b.t; }).join("\n");
    sha256(full).then(function (hash) {
      state.hash = hash;
      return loadJsPdf().then(function () { return buildPdf(sig, name, when, hash); }).catch(function () { return null; }).then(function (doc) {
        state.pdf = doc ? { doc: doc, file: "NDA_Additium3D_" + safe(state.data.empresa) + ".pdf" } : null;
        var fd = new FormData();
        fd.append("_subject", "NDA FIRMADO · " + state.data.empresa + " · dronesmjf.com");
        fd.append("_template", "table"); fd.append("_captcha", "false");
        fd.append("Estado", "NDA firmado electrónicamente por la Colaboradora. PENDIENTE DE CONTRAFIRMA de Additium3D.");
        fd.append("Fecha y hora", when); fd.append("Idioma", L());
        fd.append("Empresa", state.data.empresa); fd.append("CIF/NIF/VAT", state.data.cif); fd.append("País", state.data.pais);
        fd.append("Domicilio", state.data.domicilio); fd.append("Registro", state.data.registro || "-");
        fd.append("Firmante", name); fd.append("ID del firmante", state.data.repid); fd.append("Cargo", state.data.cargo);
        fd.append("Email", state.data.email); fd.append("Huella SHA-256 del texto", hash);
        fd.append("Origen (QR/UTM)", window.HWTrack ? window.HWTrack.leadText() : "-"); fd.append("Navegador", navigator.userAgent); fd.append("Texto firmado", full);
        var send = function (withPdf) {
          var f2 = new FormData(); fd.forEach(function (v, k) { f2.append(k, v); });
          if (withPdf && state.pdf) f2.append("attachment", state.pdf.doc.output("blob"), state.pdf.file);
          return fetch(ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: f2 }).then(function (r) { return r.json().then(function (j) { if (!(r.ok && String(j.success) !== "false")) throw new Error("fail"); }); });
        };
        return send(true).catch(function () { return send(false); });
      });
    }).then(function () { state.sent = true; ss("hw-nda", when); tr("NDA Signed", { sent: "yes" }); })
      .catch(function (e) { if (window.console) console.error("NDA send failed", e); state.sent = false; tr("NDA Signed", { sent: "no" }); })
      .then(function () {
        state.busy = false; btn.disabled = false; $("span", btn).textContent = t("s.btn");
        apply(); go("done");
      });
  }
  function makePdfDownload() {
    if (state.pdf) state.pdf.doc.save(state.pdf.file);
  }

  /* ---------------- enganche: enlaces Calendly ---------------- */
  function hook() {
    $$('a[href*="calendly.com"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault(); open({ type: "calendly", url: a.href.split("?")[0] });
      });
    });
  }
  window.HWGate = { open: open };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", hook); else hook();
})();
