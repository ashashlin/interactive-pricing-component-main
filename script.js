function  subCardSlider() {
  const slider = document.querySelector('.js-sub-card__slider');
  const value = Number(slider.value);
  const maxValue = Number(slider.max);

  let progress = (value / maxValue) * 100;

  slider.style.background = `linear-gradient(to right, #A4F3EB ${progress}%, #ECF0FB ${progress}%)`;

  const service = document.querySelector('.js-sub-card__service');
  const price = document.querySelector('.js-sub-card__price-num');

  if (value === 0) {
    service.innerHTML = '50K Pageviews';
    price.innerHTML = '$8.00';
  } else if (value === 50) {
    service.innerHTML = '100K Pageviews';
    price.innerHTML = '$16.00';
  } else if (value === 100) {
    service.innerHTML = '150K Pageviews';
    price.innerHTML = '$24.00';
  }
}

subCardSlider();

function subCardToggle() {
  const toggle = document.querySelector('.js-sub-card__toggle');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
}

subCardToggle();

function updateHTMLOnScreenSize() {
  const discount = document.querySelector('.js-sub-card__discount');
  const screenWidth = window.innerWidth;

  if (screenWidth < 1440) {
    discount.innerHTML = '-25%';
  } else {
    discount.innerHTML = '25% discount';
  }
}

updateHTMLOnScreenSize();

window.addEventListener('resize', () => {
  updateHTMLOnScreenSize();
});
