var mobileMenu = document.querySelector(".mobile-menu");
var navList = document.querySelector(".nav-list");

const toggleMenu = () => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");
};

mobileMenu.addEventListener("click", toggleMenu);

// Seleciona os elementos
const openFloatingBoxButton = document.getElementById('openFloatingBox');
const closeFloatingBoxButton = document.getElementById('closeFloatingBox');
const floatingBox = document.getElementById('floatingBox');

// Abrir caixa com animação
openFloatingBoxButton.addEventListener('click', () => {
  floatingBox.style.display = 'block';
  setTimeout(() => floatingBox.classList.add('active'), 10);
});

// Fechar caixa com animação
closeFloatingBoxButton.addEventListener('click', () => {
  floatingBox.classList.remove('active');
  setTimeout(() => floatingBox.style.display = 'none', 300);
});
