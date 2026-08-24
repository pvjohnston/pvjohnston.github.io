(function () {
  const links = Array.from(document.querySelectorAll(".nav a[href^='#']"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = "#" + visible.target.id;
      links.forEach((a) => {
        a.toggleAttribute("aria-current", a.getAttribute("href") === id);
      });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.4] }
  );

  sections.forEach((s) => observer.observe(s));
})();
