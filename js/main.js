const navbarToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.nav-menu');
const bars = document.querySelectorAll('.navbar-toggle span');

navbarToggle.addEventListener('click', () =>{
  navMenu.classList.toggle('active');
  bars.forEach(child => {
    child.classList.toggle('animations');
  });
});


var slideIndex = 0;
showSlides();
function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}