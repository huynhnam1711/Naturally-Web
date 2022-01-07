// boostrap Swiper > products-first
var swiper = new Swiper(".products-slider", {
  loop:true,
  spaceBetween: 20,
  grabCursor:true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});