

const botaoHamburguer = document.querySelector('.botao-hamburguer');
const menuDropdown = document.querySelector('.menu-dropdown');

botaoHamburguer.addEventListener('click', () => {
  menuDropdown.classList.toggle('mostrar');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuDropdown.classList.remove('mostrar');
  }
});

const avatar = document.querySelector('.avatar');

avatar.addEventListener('mouseover', () => {
  avatar.style.transform = 'scale(1.2)';
  avatar.style.transition = 'transform 0.3s';
});

avatar.addEventListener('mouseout', () => {
  avatar.style.transform = 'scale(1)';
  avatar.style.transition = 'transform 0.3s';
});
