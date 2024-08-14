// Sticky Navigation Bar
window.onscroll = function() {makeNavSticky()};

var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function makeNavSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll to Top Button
var scrollToTopBtn = document.querySelector(".scroll-to-top");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / scrollTotal ) > 0.2) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

scrollToTopBtn.addEventListener("click", function() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.addEventListener("scroll", handleScroll);
let currentIndex = 0;

const testimonialCarousel = document.querySelector('.testimonial-carousel');
const testimonials = document.querySelectorAll('.testimonial-box');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function updateCarousel() {
    testimonialCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Optional: Automatic sliding
setInterval(() => {
    nextBtn.click();
}, 5000);

