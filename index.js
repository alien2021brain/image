const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
let current = 1;

right.addEventListener('click', () => {
  slider.style.transform = `translateX(-${current * 800}px)`;
  current++;
});
