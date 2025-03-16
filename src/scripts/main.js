const burgerButton = document.querySelector('.header__burger-button');
const burgerMenu = document.querySelector('.header__burger-menu');
const body = document.body;

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burgerButton.classList.toggle('open');

  if (burgerMenu.classList.contains('open')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
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