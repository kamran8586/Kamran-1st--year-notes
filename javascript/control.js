const toggle_navbar = document.querySelector(".toggle-navbar");
const menu_bar = document.querySelector(".menu-bar");
toggle_navbar.addEventListener("click", () => {
  menu_bar.classList.toggle("h-0");
  menu_bar.classList.toggle("scale-0");
  menu_bar.classList.toggle("scale-100");
  console.log("remove");
});
