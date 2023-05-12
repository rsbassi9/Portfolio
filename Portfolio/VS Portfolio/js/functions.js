// Get the burger menu button and navigation menu
const burgerMenu = document.getElementById('burger-menu');
const navbar = document.getElementById('navbar');

// Add an event listener to the burger menu button
burgerMenu.addEventListener('click', () => {
  // Toggle the show class on the navigation menu
  navbar.classList.toggle('show');
});