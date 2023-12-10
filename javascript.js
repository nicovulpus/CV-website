const cursorIndex = document.querySelector('.CursorIndex');
const textIndex = 'Digital Resume';
let charIndexIndex = 0;

if (cursorIndex) {
  setInterval(() => {
    cursorIndex.style.opacity = cursorIndex.style.opacity === '0' ? '1' : '0';
  }, 400);
}

if (cursorIndex) {
  setInterval(() => {
    if (charIndexIndex <= textIndex.length) {
      let charIndex = textIndex.charAt(charIndexIndex);
      let typedTextIndex = cursorIndex.previousElementSibling.innerText;

      cursorIndex.previousElementSibling.innerHTML = charIndex !== ' ' ? typedTextIndex + charIndex : typedTextIndex + '&nbsp;';
      charIndexIndex++;
    }
  }, 75);
}



document.addEventListener("DOMContentLoaded", function () {
  var educationContainer = document.querySelector(".EducationContainer");

  function checkScroll() {
    var scrollPosition = window.scrollY + window.innerHeight;

    // Adjust the value (500) based on when you want the animation to start
    if (scrollPosition > 500) {
      educationContainer.classList.add("appear");
    }
  }

  window.addEventListener("scroll", checkScroll);
});

// Add this script to your JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  var educationContainer = document.querySelector(".EducationContainer");
  var lastScrollPosition = window.scrollY;

  function checkScroll() {
    var currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down
      var scrollPosition = window.scrollY + window.innerHeight;

      // Adjust the value (500) based on when you want the animation to start
      if (scrollPosition > 500) {
        educationContainer.classList.add("appear");
      }
    } else {
      // Scrolling up
      if (currentScrollPosition < 500) {
        educationContainer.classList.remove("appear");
      }
    }

    lastScrollPosition = currentScrollPosition;
  }

  window.addEventListener("scroll", checkScroll);
});
