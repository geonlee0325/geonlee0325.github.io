(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  // footer year
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  // toast utility
  const toast = $("#toast");
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 1100);
  };

  // email: copy + mailto
  const email = $("#email");
  if (email) {
    const raw = email.getAttribute("data-email");
    email.setAttribute("href", `mailto:${raw}`);

    email.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(raw);
        showToast("Copied email");
      } catch {
        showToast("Copy failed");
      }
      window.location.href = `mailto:${raw}`;
    });
  }

  // external links safety
  $$('a[href^="http"]').forEach((a) => {
    try {
      const u = new URL(a.href);
      if (u.origin !== location.origin) {
        if (!a.target) a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
    } catch {}
  });

  // mini-nav: active section highlight (fancy but subtle)
  const navLinks = $$(".mini-nav a");
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (sections.length) {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const id = visible.target.getAttribute("id");
        navLinks.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.2, 0.4, 0.6] }
    );

    sections.forEach((s) => io.observe(s));
  }
})();
