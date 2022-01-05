const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hlavicka = document.querySelector("#hlavicka");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  hlavicka.style.paddingBottom='10rem';
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))