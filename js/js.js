

const botaoHamburguer = document.querySelector('.botao-hamburguer');
const menuDropdown = document.querySelector('.menu-dropdown');
const avatar = document.querySelector('.avatar');

function toggleMenu() {
  menuDropdown.classList.toggle('mostrar');
}

function hideMenu() {
  if (window.innerWidth > 768) {
    menuDropdown.classList.remove('mostrar');
  }
}

function scaleAvatar(scale) {
  avatar.style.transform = `scale(${scale})`;
  avatar.style.transition = 'transform 0.3s';
}

botaoHamburguer.addEventListener('click', toggleMenu);
window.addEventListener('resize', hideMenu);
avatar.addEventListener('mouseover', () => scaleAvatar(1.2));
avatar.addEventListener('mouseout', () => scaleAvatar(1));