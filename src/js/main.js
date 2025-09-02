// Query Selectors
const accEls = [...document.querySelectorAll(".accordian__el")];
const accordian = document.querySelector(".accordian");

// Track toggled elements
let toggledAccEls = [];

accordian.addEventListener("click", (e) => {
  const clickedEl = e.target.closest(".accordian__el");
  if (!clickedEl) return;
  accordianSet(clickedEl.dataset.value);
});

const accordianReset = () => {
  accEls.forEach((el) => el.classList.remove("active"));
};

const accordianSet = (value) => {
  const target = accEls.find((el) => el.dataset.value === value);
  if (!target) return;
  updateToggled(target);
  accordianReset();
  toggledAccEls.forEach((el) => el.classList.add("active"));
};

const updateToggled = (target) => {
  // If already toggled, remove it
  if (toggledAccEls.includes(target)) {
    toggledAccEls = toggledAccEls.filter((el) => el !== target);
  } else {
    toggledAccEls = [...toggledAccEls, target];
  }
};

// Testimonials Swiper
const testSwiper = new Swiper(".swiper--testimonials", {
  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    1200: { slidesPerView: 2, direction: "vertical" },
  },
});

// Images Swiper
const swiper = new Swiper(".swiper--images", {
  slidesPerView: "auto",
  spaceBetween: "12",
  breakpoints: {
    580: { slidesPerView: "auto", spaceBetween: "32" },
  },
});
