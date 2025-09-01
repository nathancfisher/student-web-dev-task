// Query Selectors
const accEls = [...document.querySelectorAll(".accordian__el")];
const accordian = document.querySelector(".accordian");

// Accordian Functionality
accordian.addEventListener("click", (e) => {
  accordianSet(e.target.closest(".accordian__el").dataset.value);
});

const accordianReset = () => {
  accEls.forEach((el) => el.classList.remove("active"));
};

const accordianSet = (value) => {
  accordianReset();
  accEls.find((el) => el.dataset.value === value).classList.add("active");
};

// Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: "2",
  spaceBetween: "50",
});
