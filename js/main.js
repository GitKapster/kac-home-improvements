document.documentElement.classList.add("js");

/* ---- Mobile menu ---- */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

/* ---- Home hero background slideshow ---- */
const heroBgSlides = document.querySelectorAll('.hero-bg-slide');

if (heroBgSlides.length > 0) {
  let heroBgIndex = 0;

  const goToHero = (newIndex) => {
    heroBgSlides[heroBgIndex].classList.remove('active');
    heroBgIndex = (newIndex + heroBgSlides.length) % heroBgSlides.length;
    heroBgSlides[heroBgIndex].classList.add('active');
  };

  let heroInterval = setInterval(() => goToHero(heroBgIndex + 1), 7000);

  const resetHeroInterval = () => {
    clearInterval(heroInterval);
    heroInterval = setInterval(() => goToHero(heroBgIndex + 1), 7000);
  };

  document.querySelector('.hero-arrow-prev')?.addEventListener('click', () => { goToHero(heroBgIndex - 1); resetHeroInterval(); });
  document.querySelector('.hero-arrow-next')?.addEventListener('click', () => { goToHero(heroBgIndex + 1); resetHeroInterval(); });
}

/* ---- Page-hero background slideshow (inner pages) ---- */
const pageHeroSlides = document.querySelectorAll('.page-hero-slide');

if (pageHeroSlides.length > 0) {
  let phIndex = 0;

  const goTo = (newIndex) => {
    pageHeroSlides[phIndex].classList.remove('active');
    phIndex = (newIndex + pageHeroSlides.length) % pageHeroSlides.length;
    pageHeroSlides[phIndex].classList.add('active');
  };

  let phInterval = setInterval(() => goTo(phIndex + 1), 7000);

  const resetInterval = () => {
    clearInterval(phInterval);
    phInterval = setInterval(() => goTo(phIndex + 1), 7000);
  };

  document.querySelector('.page-hero-arrow-prev')?.addEventListener('click', () => {
    goTo(phIndex - 1);
    resetInterval();
  });

  document.querySelector('.page-hero-arrow-next')?.addEventListener('click', () => {
    goTo(phIndex + 1);
    resetInterval();
  });
}

/* ---- Scroll reveal ---- */
const revealItems = document.querySelectorAll(".reveal");

if (!("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((item) => observer.observe(item));
}
