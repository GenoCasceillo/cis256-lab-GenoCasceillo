.bright {
  color: orange;
  font-family: Avenir;
}
body {
  background-color: red;
    margin-left: 400px;
    margin-right: 400px;
    text-align: center;
    border: 3px solid gold;
}
h1 {
    text-align: center;
  color: gold;
}
p {
  color: white;
    text-align: center;
}
table {
      text-align: center;
      border: 3px solid gold;
      margin-left: auto;
      margin-right: auto;
}
ul {
    text-align: center;
    list-style-position: inside;
}
body {
  position: relative
}
footer{
    text-align: center;
    color: gold;
}
div#holiday-ornament {
  background: url("https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg:*") no-repeat;
  width: 800px; /*set the width and height to the width and height of the image */
  height: 800px;
  text-indent: -9999px; /* Move the text inside of the div off screen. Still readable for text-readers for the blind */
  position: absolute;
  left: -113%;
  top: -25px;
}
div#trans2 {
  background: url("https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg:*") no-repeat;
  width: 400px;
  height: 800px;
  text-indent: -9999px; /* Move the text inside of the div off screen. Still readable for text-readers for the blind */
  position: absolute;
  left: 101%;
  top: -25px;
}
nav li 	 {list-style: none;} /* No bullets */

nav a 	 {text-decoration: none;} /* No underline on links in navbar */

/* flex layout lets the navbar be responsive to screen size */
.navbar   { display: flex; align-items: center; padding: 1rem 1.5rem;}

/* Sets margins around nav items */
.nav-item { margin-left: 5rem; margin-right: 2rem}

/* Sets the look of the links */
.nav-link{ font-size: 1.6rem; font-weight: 400; color: #475569;}

/* Changes color of link when hover over it */
.nav-link:hover { color: #482ff7;}

/* z-index makes sure menu shows up on top of other elements,
   transition is speed menu items transition to active
   left: -100% hides the menu off the screen when it's not active */
.nav-menu {
    z-index: 3;
    position: fixed;
    left: -100%;
    top: 55%;
    flex-direction: column;
    background:rgba(255,255,255,1.0);
    text-align: center;
    transition: 0.3s;
}

/* When menu is active display it on the side by setting its left
position to 0 (no longer hiding at left position -100%) */
.nav-menu.active {
    left: 0;
}

/* display the hamburger as a clickable button, but make it blend in */
.hamburger {
    display: block;
    cursor: pointer;
    padding: 0;
    border: none;
    background: none;
}

/* draw the hamburger--all spans will be filled with dark background and stacked on top of each other */
.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
}

/* When hamburger is active, hide middle bar */
.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

/* When hamburger is active, rotate top bar 45deg to make one cross of X */
.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

/* When hamburger is active, rotate bottom bar -45deg to make other cross of X */
.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}
