// Add event listener to the window object to handle the load event
window.addEventListener('load', function() {
  // Get the hero element
  const hero = document.querySelector('.hero');
  
  // Add a fade-in animation to the hero element
  hero.classList.add('animate');
});

// Add event listener to the window object to handle the scroll event
window.addEventListener('scroll', function() {
  // Get the about and contact elements
  const about = document.querySelector('.about');
  const contact = document.querySelector('.contact');
  
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  
  // Add a fade-in animation to the about element when it comes into view
  if (scrollPosition > about.offsetTop - window.innerHeight) {
    about.classList.add('animate');
  }
  
  // Add a fade-in animation to the contact element when it comes into view
  if (scrollPosition > contact.offsetTop - window.innerHeight) {
    contact.classList.add('animate');
  }
});