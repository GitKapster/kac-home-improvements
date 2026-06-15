/* =================================================================
   K.A.C Home Improvements - main script
   Two simple jobs:
   1. Open/close the mobile menu when the hamburger is tapped.
   2. Fade content in as you scroll down the page.
   ================================================================= */

/* Tell the CSS that JavaScript is running.
   This switches on the fade-in start state (see style.css). */
document.documentElement.classList.add("js");

/* ---- 1. MOBILE MENU TOGGLE ------------------------------------- */
// Find the hamburger button and the list of links.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

// When the button is clicked, add/remove the "open" class.
// The CSS shows the menu only when "open" is present.
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close the menu again after a link is tapped.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* ---- 2. SCROLL REVEAL ------------------------------------------ */
// Grab every element we want to fade in.
const revealItems = document.querySelectorAll(".reveal");
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-dot');
const heroPrev = document.querySelector('.hero-arrow-prev');
const heroNext = document.querySelector('.hero-arrow-next');

if (heroSlides.length > 0) {
  let heroSlideIndex = 0;
  const updateHeroSlide = (newIndex) => {
    heroSlides[heroSlideIndex].classList.remove('active');
    heroDots[heroSlideIndex]?.classList.remove('active');
    heroSlideIndex = newIndex;
    heroSlides[heroSlideIndex].classList.add('active');
    heroDots[heroSlideIndex]?.classList.add('active');
  };

  const showNextSlide = () => {
    const nextIndex = (heroSlideIndex + 1) % heroSlides.length;
    updateHeroSlide(nextIndex);
  };

  const showPrevSlide = () => {
    const prevIndex = (heroSlideIndex - 1 + heroSlides.length) % heroSlides.length;
    updateHeroSlide(prevIndex);
  };

  heroNext?.addEventListener('click', showNextSlide);
  heroPrev?.addEventListener('click', showPrevSlide);

  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateHeroSlide(index));
  });

  let heroInterval = setInterval(showNextSlide, 7000);
  const heroCarousel = document.querySelector('.hero-carousel');
  heroCarousel?.addEventListener('mouseenter', () => clearInterval(heroInterval));
  heroCarousel?.addEventListener('mouseleave', () => {
    heroInterval = setInterval(showNextSlide, 7000);
  });
}

// Safety net: if the browser can't observe scrolling, just show everything.
if (!("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  // IntersectionObserver tells us when an element comes into view.
  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Once it's on screen, add the class that fades it in.
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // only do it once
      }
    });
  },
  { threshold: 0.15 } // trigger when 15% of the item is visible
);

  // Watch each reveal element.
  revealItems.forEach((item) => observer.observe(item));
}
