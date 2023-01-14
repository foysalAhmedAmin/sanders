






// bestseller slider
const swiper = new Swiper('.hero-slide-active', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
    navigation: {
    nextEl: '.bestSeller-next',
    prevEl: '.bestSeller-prev',
  },
})

// bestseller slider
const swiperTwo = new Swiper('.bestseller-slider-active', {
  // Default parameters
  slidesPerView: 5,
  spaceBetween: 24,
    navigation: {
    nextEl: '.bestSeller-next',
    prevEl: '.bestSeller-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 24
    }
  },
})