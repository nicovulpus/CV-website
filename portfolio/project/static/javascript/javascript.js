
// IndexTyping...//

// Get the element
const element = document.getElementById('Nicholas');
// Define the text
const text = "Nicholas Vandremo";
// Initialize an empty string to store the typed text
let typedText = "";

// Function to simulate typing effect
function typeWriter() {
    // Check if there is any text left to type
    if (text.length > typedText.length) {
        // Add the next character to the typedText string
        typedText += text.charAt(typedText.length);
        // Update the text content of the element
        element.textContent = typedText;
        // Call this function again after a short delay (e.g., 100ms) to type the next character
        setTimeout(typeWriter, 75);
    }
}

// Call the function to start the typewriter effect
typeWriter();



// Get the scrollspy element
var scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');

// Add event listener for the 'activate' event
scrollSpyElement.addEventListener('activate.bs.scrollspy', function (event) {
    // Get the currently active menu item
    var activeMenuItem = event.target.querySelector('.active');


});


$('h1').on('click', function(){
    $(this).toggleClass('turnBlue');
})