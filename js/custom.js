window.alert("The world is going through a difficult time because of the spread of the Corona virus (Covid-19), so we must unite together and pray to God to help us adjacent this matter. If there isn't enough reason to leave your home, it is better to stay at your home. Stay_Home Stay_Safe");

$('document').ready(function () {
    'use strict';
    var typed = new Typed('#typed', {
            strings: ["Hello Guys !",""],
            typeSpeed: 120,
            backDelay:1000,
            backSpeed:10,
            showCursor: false
        });
    var typed = new Typed('#typedd', {
            strings: ["I'm Ahmad Emam,<br/>A Front-End<br/> Web Developer"],
            typeSpeed: 100,
            showCursor: false,
            startDelay:3500
        });
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 5 seconds
}