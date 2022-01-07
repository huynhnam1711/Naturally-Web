// boostrap Swiper > products-first
var swiper = new Swiper(".products-slider", {
  loop:true,
  spaceBetween: 20,
  grabCursor:true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
  },
});