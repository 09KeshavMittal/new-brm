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

















// -------------------------Practice Areas--------------------------------
const flashCardApp = new Vue({
    el: '#flashCardApp',
    data: {
        cards: [{
            id: 1,
            frontText: 'Who invented the first computer in the world?',
            backText: 'Konrad Zuse in 1936 by the name Z1',
            colorClass: 'red',
            flipped: false
        },
        {
            id: 2,
            frontText: 'Who invented all the parts that are now used for a modern computer?',
            backText: 'A man by the name of Charles Babbage in 1833.',
            colorClass: 'yellow',
            flipped: false
        },
        {
            id: 3,
            frontText: 'Who invented the "Clarke Calculator"?',
            backText: 'Edith Clarke in 1925',
            colorClass: 'blue',
            flipped: false
        }]
    },

    methods: {
        flipCard: function(card) {
            card.flipped = !card.flipped;
        }
    }
});




































// contct us
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Add validation and send email logic here
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);
});








//Go to Top



// Get the button
var goToTopBtn = document.getElementById("goToTopBtn");

// Show the button when scrolling down 20px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
goToTopBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

