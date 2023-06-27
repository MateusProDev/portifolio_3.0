const barbearia = document.querySelector('.containerNav');
const navLinks = document.querySelector('.nav-links');

barbearia.addEventListener('click', () => {
  barbearia.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// animação dos cards
function activateBox(box) {
  box.classList.toggle('active');
}

function rotateIn(box) {
  if (!box.classList.contains('active')) {
    box.classList.add('cardCodeBox-hover');
  }
}

function rotateOut(box) {
  box.classList.remove('cardCodeBox-hover');
}

