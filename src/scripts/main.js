const burgerButton = document.querySelector('.header__burger-button');
const burgerMenu = document.querySelector('.header__burger-menu');

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burgerButton.classList.toggle('open');
});

new Swiper('.services__swiper', {
  slidesPerView: 3.5,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
});