/* Formulario de contacto -> info@additium3d.com (FormSubmit, AJAX).
   Al enviar, primero pasa por la pantalla de Fusi + opción de NDA (js/gate.js); después se envía. */
(function () {
  "use strict";
  var form = document.getElementById("cform");
  if (!form) return;
  var st = document.getElementById("cfStatus");
  var M = {
    es: { sending: "Enviando…", ok: "¡Enviado! Te respondemos en 24 h laborables.", err: "No se ha podido enviar.", mail: "Envíalo desde tu correo →", req: "Revisa los campos obligatorios." },
    en: { sending: "Sending…", ok: "Sent! We'll reply within 24 working hours.", err: "Could not send.", mail: "Send it from your email app →", req: "Please check the required fields." }
  };
  function t(k) { return (M[(window.I18N && window.I18N.lang) || "en"] || M.en)[k]; }

  function fail(detail) {
    if (window.console) console.error("Contact form: send failed", detail);
    var f = form.elements, body = [f.name.value, f.company.value, f.email.value, "", f.message.value].join("\n");
    st.className = "cf-st err"; st.textContent = t("err") + " ";
    var a = document.createElement("a");
    a.href = "mailto:info@additium3d.com?subject=" + encodeURIComponent("Consulta web · dronesmjf.com") + "&body=" + encodeURIComponent(body);
    a.textContent = t("mail"); st.appendChild(a);
  }
  function send(extra) {
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true; st.className = "cf-st"; st.textContent = t("sending");
    var data = new FormData(form);
    data.append("_lang", (window.I18N && window.I18N.lang) || "en");
    Object.keys(extra || {}).forEach(function (k) { data.append(k, extra[k]); });
    data.append("Origen (QR/UTM)", window.HWTrack ? window.HWTrack.leadText() : "-");
    fetch("https://formsubmit.co/ajax/info@additium3d.com", { method: "POST", headers: { Accept: "application/json" }, body: data })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (res.ok && String(res.j.success) !== "false") { if (window.HWTrack) window.HWTrack.ev("Form Send", { ok: "yes", how: form.elements.how.value || "sin-indicar", nda: (extra && String(extra.nda).indexOf("FIRMADO") === 0) ? "yes" : "no" }); form.reset(); st.className = "cf-st ok"; st.textContent = t("ok"); }
        else throw new Error((res.j && res.j.message) || ("HTTP " + res.ok));
      })
      .catch(function (e) { if (window.HWTrack) window.HWTrack.ev("Form Send", { ok: "no" }); fail(e && e.message); })
      .then(function () { btn.disabled = false; });
  }

  /* preseleccionar el origen si la URL trae etiqueta (QR propios) */
  (function () {
    var sel = document.getElementById("cfHow"), cmp = window.HWTrack && window.HWTrack.lead().utm_campaign;
    if (!sel || !cmp) return;
    var m = { "formnext-2026": "formnext", "feindef-2027": "feria-defensa", "ferias-defensa": "feria-defensa", "linkedin": "linkedin" };
    if (m[cmp]) sel.value = m[cmp];
  })();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); st.textContent = t("req"); st.className = "cf-st err"; return; }
    st.textContent = "";
    if (window.HWGate) {
      window.HWGate.open({
        type: "form", run: send,
        prefill: { rep: form.elements.name.value.trim(), empresa: form.elements.company.value.trim(), email: form.elements.email.value.trim() }
      });
    } else send({});
  });
})();
