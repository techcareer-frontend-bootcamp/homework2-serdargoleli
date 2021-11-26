/*  MENU MOBILE TOGGLE */
let openMenu = document.getElementById("toggle-menu");
let mobileMenu = document.getElementById("menu");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("rotate-90");
  mobileMenu.classList.toggle("open-mobile-menu");
});

/*  Music Play */
let playMusic = document.getElementById("btn-play");
let music = document.getElementById("music");
playMusic.addEventListener("click", () => {
  music.play();
});
