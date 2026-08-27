/* PJA Carpentry & Joinery — site interactions */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* Mobile navigation */
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    /* Scroll reveal */
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    }

    /* Gallery filtering */
    var filterBar = document.querySelector(".filter-bar");
    if (filterBar) {
      filterBar.addEventListener("click", function (ev) {
        var btn = ev.target.closest("button[data-filter]");
        if (!btn) return;
        var value = btn.getAttribute("data-filter");
        filterBar.querySelectorAll("button").forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        document.querySelectorAll(".work-grid .work-item").forEach(function (item) {
          var match = value === "all" || (item.getAttribute("data-category") || "").indexOf(value) !== -1;
          item.style.display = match ? "" : "none";
        });
      });
    }

    /* Lightbox for gallery items */
    var lightbox = document.getElementById("lightbox");
    if (lightbox) {
      var lbFigure = lightbox.querySelector("figure");
      document.querySelectorAll(".work-item").forEach(function (item) {
        item.addEventListener("click", function () {
          var media = item.querySelector("img, svg");
          var caption = item.querySelector("figcaption, .caption");
          if (!media) return;
          lbFigure.innerHTML = "";
          var clone = media.cloneNode(true);
          clone.style.transform = "";
          lbFigure.appendChild(clone);
          if (caption) {
            var cap = document.createElement("figcaption");
            cap.textContent = caption.textContent;
            lbFigure.appendChild(cap);
          }
          lightbox.classList.add("open");
          document.body.style.overflow = "hidden";
        });
      });
      function closeLightbox() {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
      }
      lightbox.addEventListener("click", function (ev) {
        if (ev.target === lightbox || ev.target.closest(".lightbox-close")) closeLightbox();
      });
      document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape") closeLightbox();
      });
    }

    /* Contact form: track submission + let FormSubmit handle delivery */
    var form = document.querySelector("form.contact-form");
    if (form) {
      form.addEventListener("submit", function () {
        if (typeof window.gtag === "function") {
          window.gtag("event", "generate_lead", { form_id: "contact" });
        }
      });
    }

    /* Current year in footer */
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
