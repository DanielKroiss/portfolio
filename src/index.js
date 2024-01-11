import './styles/style.css';
import './styles/progress.css';
import './styles/queries.css';
import './images/daniel-1.jpg';

import './images/fav-icon-dk.jpg';

import './images/programming.jpg';

import './images/daniel_highlands.jpeg';

import './images/favicon-32x32.png';

import pdfFile from './assets/CV_Daniel_Kroiss.pdf';

import './timeline.js'


const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });
}

// animated job title
window.addEventListener("load", function (event) {
  let textWrapper = document.getElementsByClassName("ml3")[0];
  textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
  );
  anime
      .timeline({ loop: true })
      .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 200,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: ".ml3",
        opacity: 0,
        duration: 200,
        easing: "easeOutExpo",
        delay: 1000000,
      });
});

