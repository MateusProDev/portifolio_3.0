const portifolio = document.querySelector('.containerNav');
const navLinks = document.querySelector('.nav-links');

portifolio.addEventListener('click', () => {
  portifolio.classList.toggle('active');
  navLinks.classList.toggle('active');
});

