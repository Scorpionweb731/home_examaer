// script.js

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrolltotop');
       scrollToTopBtn.style.display = 'none';
       
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 700) { // Show button after scrolling down 300px
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    // Smooth scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  