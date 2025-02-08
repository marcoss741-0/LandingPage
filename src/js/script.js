var mobileMenu = document.querySelector(".mobile-menu");
var navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", function () {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

navList.addEventListener("click", function () {
  navList.classList.remove("active");
});
