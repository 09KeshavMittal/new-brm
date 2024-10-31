// ------------------------------Navbar----------------------------------------------
// Get the necessary elements
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');
let body = document.querySelector('body'); // Get the body element to control scrolling
let menuItems = document.querySelectorAll('.overlay-menu li a'); // Get all menu items

// Function to open the overlay menu
function openOverlay() {
    nav.style.transform = 'translateX(0%)'; // Show the overlay
    nav.style.transition = 'transform 0.2s ease-out';
    body.style.overflow = 'hidden'; // Disable scrolling on the main page
    menuIcon.classList.add('toggle'); // Add toggle class to the icon
}

// Function to close the overlay menu
function closeOverlay() {
    nav.style.transform = 'translateX(-100%)'; // Hide the overlay
    nav.style.transition = 'transform 0.2s ease-out';
    body.style.overflow = 'auto'; // Re-enable scrolling on the main page
    menuIcon.classList.remove('toggle'); // Remove toggle class from the icon
}

// Toggle menu visibility when the icon is clicked
menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        openOverlay(); // Open the overlay if it is closed
    } else {
        closeOverlay(); // Close the overlay if it is open
    }
});

// Close the overlay when an option is selected
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        closeOverlay(); // Close the overlay when an item is clicked
    });
});

