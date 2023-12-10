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


