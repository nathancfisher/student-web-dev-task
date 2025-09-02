// Query Selectors
const accEls = [
    ...document.querySelectorAll(".accordian__el")
];
const accordian = document.querySelector(".accordian");
// Accordian Functionality
accordian.addEventListener("click", (e)=>{
    accordianSet(e.target.closest(".accordian__el").dataset.value);
});
const accordianReset = ()=>{
    accEls.forEach((el)=>el.classList.remove("active"));
};
const accordianSet = (value)=>{
    accordianReset();
    accEls.find((el)=>el.dataset.value === value).classList.add("active");
};
// Testimonials Swiper
const testSwiper = new Swiper(".swiper--testimonials", {
    slidesPerView: "auto",
    spaceBetween: 16,
    breakpoints: {
        1200: {
            slidesPerView: 2,
            direction: "vertical"
        }
    }
});
// Images Swiper
const swiper = new Swiper(".swiper--images", {
    slidesPerView: "auto",
    spaceBetween: "12",
    breakpoints: {
        580: {
            slidesPerView: "auto",
            spaceBetween: "32"
        }
    }
});

//# sourceMappingURL=SU Interview.aa69868b.js.map
