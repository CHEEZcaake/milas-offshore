/* ==========================================================================
   Milas Offshore main site behaviour
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* Mobile nav toggle */
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mainNav = document.querySelector("[data-main-nav]");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
    mainNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mainNav.classList.remove("open"))
    );
  }

  /* Language dropdown (header) */
  document.querySelectorAll("[data-lang-switch]").forEach((wrap) => {
    const trigger = wrap.querySelector("[data-lang-trigger]");
    if (!trigger) return;
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll("[data-lang-switch]").forEach((w) => {
        if (w !== wrap) w.classList.remove("open");
      });
      wrap.classList.toggle("open");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll("[data-lang-switch]").forEach((w) => w.classList.remove("open"));
  });

  /* Active nav link */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-main-nav] a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });

  /* Scroll reveal */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.setProperty("--i", i % 8);
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* Counter animation for hero stats */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const counted = new WeakSet();
    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.has(entry.target)) {
            counted.add(entry.target);
            animateCount(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => io2.observe(el));
  }

  function animateCount(el) {
    const raw = el.textContent.trim();
    const match = raw.match(/[\d.,]+/);
    if (!match) return;
    const numStr = match[0].replace(/[.,]/g, "");
    const target = parseInt(numStr, 10);
    if (isNaN(target)) return;
    const prefix = raw.slice(0, match.index);
    const suffix = raw.slice(match.index + match[0].length);
    const duration = 1100;
    const start = performance.now();
    function frame(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(target * eased);
      el.textContent = prefix + current.toLocaleString("en-US") + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = raw;
    }
    requestAnimationFrame(frame);
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* Cursor spotlight on dark / callout sections */
  const spotlightEls = document.querySelectorAll(".spotlight");
  const supportsHover = window.matchMedia && window.matchMedia("(hover:hover)").matches;
  if (supportsHover) {
    spotlightEls.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--sx", x + "%");
        el.style.setProperty("--sy", y + "%");
        el.classList.add("spot-active");
      });
      el.addEventListener("mouseleave", () => el.classList.remove("spot-active"));
    });
  }

  /* 3D tilt on the hero illustration panel */
  const tiltScene = document.querySelector("[data-tilt-scene]");
  const tiltTarget = document.querySelector("[data-tilt-target]");
  if (tiltScene && tiltTarget && supportsHover) {
    tiltScene.addEventListener("mousemove", (e) => {
      const rect = tiltTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = px * 14;
      const rotX = py * -14;
      tiltTarget.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    tiltScene.addEventListener("mouseleave", () => {
      tiltTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  /* Magnetic buttons: nudge primary/ghost CTAs slightly toward the cursor */
  if (supportsHover) {
    document.querySelectorAll(".btn-primary, .btn-ghost, .btn-dark").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px) translateY(-2px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }

  /* Rising bubble particles in the hero */
  const bubbleField = document.querySelector("[data-bubble-field]");
  if (bubbleField && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const count = window.innerWidth < 640 ? 8 : 16;
    for (let i = 0; i < count; i++) {
      const b = document.createElement("span");
      b.className = "bubble";
      const size = 6 + Math.random() * 16;
      b.style.width = size + "px";
      b.style.height = size + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
      const duration = 9 + Math.random() * 10;
      b.style.animationDuration = duration + "s";
      b.style.animationDelay = (Math.random() * duration) + "s";
      bubbleField.appendChild(b);
    }
  }
});

/* Toast helper, usable by other scripts */
function showToast(message, iconSvg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-ico">${iconSvg || ""}</span><span class="toast-msg"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector(".toast-msg").textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 3200);
}
