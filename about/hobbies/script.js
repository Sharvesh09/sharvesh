const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

next.addEventListener('click', () => {
  if (index < carousel.children.length - 3) {
    index++;
    carousel.style.transform = `translateX(-${index * 280}px)`;
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    carousel.style.transform = `translateX(-${index * 280}px)`;
  }
});

