let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("img");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("img");
  navbar.classList.remove("active");
};
