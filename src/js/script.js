var mobileMenu = document.querySelector(".mobile-menu");
var navList = document.querySelector(".nav-list");

const toggleMenu = () => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");
};

mobileMenu.addEventListener("click", toggleMenu);
