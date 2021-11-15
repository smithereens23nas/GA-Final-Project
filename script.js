//Navbar drop down menu
const navSlide = function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar-style");
  const navLinks = document.querySelectorAll(".navbar-style li");

  //toggle nav
  burger.addEventListener("click", function () {
    //toggle nav

    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards 
        ${index / 7 + 0.3}s`;
        console.log(index / 7);
      }
    });
    burger.classList.toggle('toggle');
  });
};

navSlide();

//grab each img
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let designUnlimited = document.getElementById("Design-unlimited");

//addEventListener for Scroll and adjust value on scroll
window.addEventListener("scroll", function () {
  let value = window.scrollY;

  stars.style.top = value * 0.5 + "px";
  moon.style.left = -value * 0.5 + "px";
  mountain.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.15 + "px";
  designUnlimited.style.top = value * 1 + "px";
});
