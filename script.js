const barbearia = document.querySelector('.containerNav');
const navLinks = document.querySelector('.nav-links');

barbearia.addEventListener('click', () => {
  barbearia.classList.toggle('active');
  navLinks.classList.toggle('active');
});

