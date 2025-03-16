const burgerButton = document.querySelector('.header__burger-button');
const burgerMenu = document.querySelector('.header__burger-menu');

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burgerButton.classList.toggle('open');
});

new Swiper('.services__swiper', {
  slidesPerView: 2.2,
  spaceBetween: 20,
  loop: false,
  grabCursor: true,
  breakpoints: {
    1600: {
      slidesPerView: 3.5,
    },
    992: {
      slidesPerView: 3.1,
    },
    576: {
      slidesPerView: 1.8,
    },
  },
});