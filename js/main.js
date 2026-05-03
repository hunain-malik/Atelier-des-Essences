/* ==========================================================================
   Atelier des Essences — Interactions
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNav();
  initCursor();
  initReveal();
  initFaq();
  initParticles();
  initFormSubmit();
  initSplitText();
  initStepHover();
});

/* ----- Loader ----- */
function initLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("gone"), 1700);
  });
}

/* ----- Navigation ----- */
function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const body = document.body;

  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle) {
    toggle.addEventListener("click", () => body.classList.toggle("mobile-open"));
    document.querySelectorAll(".mobile-menu a").forEach((a) =>
      a.addEventListener("click", () => body.classList.remove("mobile-open"))
    );
  }
}

/* ----- Custom Cursor ----- */
function initCursor() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const cursor = document.createElement("div");
  cursor.className = "cursor";
  document.body.appendChild(cursor);

  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.appendChild(ring);

  let mx = 0, my = 0, rx = 0, ry = 0;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  });

  const animate = () => {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(animate);
  };
  animate();

  const hoverables = "a, button, .step, .pillar, .tier, .faq-item, .tech-card, input, select, textarea, .nav-toggle";
  document.querySelectorAll(hoverables).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      ring.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      ring.classList.remove("hover");
    });
  });
}

/* ----- Reveal-on-scroll ----- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/* ----- Split Text Reveal ----- */
function initSplitText() {
  document.querySelectorAll("[data-split]").forEach((el) => {
    const text = el.textContent;
    el.textContent = "";
    text.split(" ").forEach((word, i) => {
      const wrap = document.createElement("span");
      wrap.className = "word";
      wrap.style.marginRight = "0.25em";
      const inner = document.createElement("span");
      inner.textContent = word;
      inner.style.transform = "translateY(110%)";
      inner.style.display = "inline-block";
      inner.style.transition = `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.07}s`;
      wrap.appendChild(inner);
      el.appendChild(wrap);
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".word > span").forEach((s) => {
            s.style.transform = "translateY(0)";
          });
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  document.querySelectorAll("[data-split]").forEach((el) => io.observe(el));
}

/* ----- FAQ accordion ----- */
function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* ----- Hero particles ----- */
function initParticles() {
  const container = document.querySelector(".particles");
  if (!container) return;
  const COUNT = 28;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 8 + Math.random() * 14 + "s";
    p.style.animationDelay = Math.random() * 10 + "s";
    p.style.opacity = 0.3 + Math.random() * 0.5;
    p.style.width = p.style.height = 1 + Math.random() * 2 + "px";
    container.appendChild(p);
  }
}

/* ----- Step hover (subtle parallax) ----- */
function initStepHover() {
  document.querySelectorAll(".step").forEach((step) => {
    step.addEventListener("mousemove", (e) => {
      const rect = step.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
      step.style.transform = `translate(${x}px, ${y}px)`;
    });
    step.addEventListener("mouseleave", () => {
      step.style.transform = "";
    });
  });
}

/* ----- Booking form ----- */
function initFormSubmit() {
  const form = document.querySelector(".form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const success = document.querySelector(".form-success");
    form.style.display = "none";
    if (success) success.classList.add("show");
    window.scrollTo({ top: success.offsetTop - 120, behavior: "smooth" });
  });
}

/* ----- Animated counter for metrics ----- */
function animateCounter(el, target, suffix = "", duration = 1800) {
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    const value = target * eased;
    el.textContent = (target % 1 === 0 ? Math.floor(value) : value.toFixed(1)) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          animateCounter(el, target, suffix);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => io.observe(c));
});
