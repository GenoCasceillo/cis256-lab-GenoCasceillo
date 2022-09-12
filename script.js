
const hamburger = document.querySelector(".hamburger"); // the hamburger button
const navMenu = document.querySelector(".nav-menu");    // the navigation menu
const navLink = document.querySelectorAll(".nav-link"); // array of all of the links in the nav menu

hamburger.addEventListener('click', function()
{
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
});
