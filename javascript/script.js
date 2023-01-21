"use strict";
console.log("hello");

let myName = "aman pandia";
const h1 = document.querySelector(".heading-primary");
//

h1.addEventListener("click", function () {
  // h1.textContent = myName;
  // h1.style.backgroundColor = "blue";
});

/*changing the copyright year by itself */
const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear;

/*working with the navigation in the mobile phones*/
const navOpenBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
navOpenBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  console.log("opening/closing nav");
});

//closing the mobile nav on clicking of a nav item
const linkNav = document.querySelectorAll(".main-nav-link");
for (let i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
}

//making the header sticky when we cross the hero tab
const herosectionEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (enteries) {
    //what should happen when the below mentioned case occurs
    const ent = enteries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
    } else if (ent.isIntersecting === true) {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    root: null, //means observing the viewport
    threshold: 0, //when herosection is completely outside viewport
    rootMargin: "-80px",
  }
);
obs.observe(herosectionEl);
