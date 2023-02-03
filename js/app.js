// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let lastScrollTop;
let navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top='-100px';
    }
    else{
        navbar.style.top='0';
    }
    lastScrollTop = scrollTop;
});

let i = 0;
let j = 0;
let k = 0;
let txt1 = 'Hey, there! My name is'; /* The text */
let txt2 = 'Incoming Software Engineer Associate at Capital One'; /* The text */
let txt3 = 'Computing Honors Scholar at the University of Texas at Dallas'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("intro-text").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}
typeWriter1();

var opacity = 0;
var intervalID = 0;
var fade = document.getElementById("intro-title");

function fadeIn() {
  var intervalID = setInterval(function() {
      if (opacity < 1) {
          opacity = opacity + 0.05;
          fade.style.opacity = opacity;
      } else {
          clearInterval(intervalID);
      }
  }, 100);
}
setTimeout(fadeIn, ((txt1.length*speed)+(1*1000)));

function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("intro-subtitle-1").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}
setTimeout(typeWriter2, ((txt1.length*speed)+(20*100)+(2*1000)));

function typeWriter3() {
  if (k < txt3.length) {
    document.getElementById("intro-subtitle-2").innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriter3, speed);
  }
}
setTimeout(typeWriter3, ((txt1.length*speed)+(20*100)+(txt2.length*speed)+(3*1000)));

var opacity2 = 0;
var intervalID2 = 0;
var fade2 = document.getElementById("intro-links");

function fadeIn2() {
  var intervalID2 = setInterval(function() {
      if (opacity2 < 1) {
          opacity2 = opacity2 + 0.05;
          fade2.style.opacity = opacity2;
      } else {
          clearInterval(intervalID2);
      }
  }, 100);
}
setTimeout(fadeIn2, ((txt1.length*speed)+(20*100)+(txt2.length*speed)+(txt3.length*speed)+(4*1000)));

document.getElementById("defaultOpen").click();

function openTab(event, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}