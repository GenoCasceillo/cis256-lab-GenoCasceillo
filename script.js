
const hamburger = document.querySelector(".hamburger"); // the hamburger button
const navMenu = document.querySelector(".nav-menu");    // the navigation menu
const navLink = document.querySelectorAll(".nav-link");
const body = document.getElementsByTagName("body")[0];
const darkmode = document.querySelector("#dark");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const bar = document.querySelectorAll(".bar");
 // array of all of the links in the nav menu

hamburger.addEventListener("click", toggleActive);
darkmode.addEventListener("click", toggleDark);
// Your code here!




// function to open the navigation menu
// this needs to add/remove the class "active" for both the hamburger and navMenu
// elements so that the hamburger will switch to an X and the navMenu will
// slide out, or the hamburger will go back to a burger and the menu will slide in
function toggleActive() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


for(var i = 0; i < navLink.length; i++){
  navLink[i].addEventListener("click", closeMenu);
}
// Add an event listener FOR EACH navigation link so the menu will close
// when it is clicked

// Your code here!




// function to close the navigation nav
// this needs to remove the class "active" from both hamburger and navMenu
function closeMenu() {

  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function toggleDark(){
  body.classList.toggle("darkmode");
  header.classList.toggle("darkmode");
  footer.classList.toggle("darkmode");
  for(var i = 0; i < bar.length; i++){
    bar[i].classList.toggle("darkmode");
  }

}
