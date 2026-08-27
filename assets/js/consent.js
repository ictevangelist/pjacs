/* Cookie consent + Google Analytics 4 (Consent Mode v2).
   Analytics loads ONLY after the visitor accepts — required under UK GDPR/PECR.
   Replace GA_MEASUREMENT_ID with the real ID from analytics.google.com
   (Admin → Data streams → Web). See SETUP.md. */

(function () {
  "use strict";

  var GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // TODO: replace with Paul's GA4 Measurement ID
  var CONSENT_KEY = "pjacs-consent";

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  // Consent Mode v2 — everything denied until the visitor chooses.
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  function readConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }

  function storeConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* private mode */ }
  }

  function loadAnalytics() {
    if (GA_MEASUREMENT_ID.indexOf("XXXX") !== -1) return; // not configured yet
    if (document.getElementById("ga-script")) return;
    gtag("consent", "update", { analytics_storage: "granted" });
    var s = document.createElement("script");
    s.id = "ga-script";
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function banner() { return document.getElementById("cookie-banner"); }

  function hideBanner() {
    var b = banner();
    if (b) b.classList.remove("show");
  }

  window.pjacsConsent = {
    accept: function () { storeConsent("granted"); hideBanner(); loadAnalytics(); },
    decline: function () { storeConsent("denied"); hideBanner(); },
    reopen: function () {
      var b = banner();
      if (b) b.classList.add("show");
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var choice = readConsent();
    if (choice === "granted") {
      loadAnalytics();
    } else if (choice === null) {
      var b = banner();
      if (b) b.classList.add("show");
    }

    var acceptBtn = document.getElementById("cookie-accept");
    var declineBtn = document.getElementById("cookie-decline");
    if (acceptBtn) acceptBtn.addEventListener("click", window.pjacsConsent.accept);
    if (declineBtn) declineBtn.addEventListener("click", window.pjacsConsent.decline);

    document.querySelectorAll("[data-cookie-settings]").forEach(function (el) {
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
        window.pjacsConsent.reopen();
      });
    });
  });
})();
