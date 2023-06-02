// *ALL PAGES * DATE AND TIME
// create animated circles that appear underneath the cursor animation that transfers the user seamlessly between the pages
//add icons  


function displayClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var timeString = hours + ":" + minutes + ":" + seconds;

  var currentDate = currentTime.toDateString();
  var clockAndDateString = timeString + " " + currentDate;
  document.getElementById("DateAndClock").innerHTML = clockAndDateString;
}

setInterval(displayClock, 1000);

//INDEX//

const cursorIndex = document.querySelector('.CursorIndex');
const textIndex = 'Nicholas  Vandremo';
let charIndexIndex = 0;

if (cursorIndex) {
  setInterval(() => {
    cursorIndex.style.opacity = cursorIndex.style.opacity === '0' ? '1' : '0';
  }, 400);
}
if (cursorIndex){
setInterval(() => {
  if (charIndexIndex < textIndex.length) {
    let charIndex = textIndex.charAt(charIndexIndex);
    let typedTextIndex = cursorIndex.previousElementSibling.innerText;
    cursorIndex.previousElementSibling.innerText = typedTextIndex + charIndex;
    charIndexIndex++;
  }
}, 75);
 }

//EDUCATION//

let cursorEducation = document.querySelector('.CursorEducation');
const textEducation = 'Education background';
let charIndexEducation = 0;
 
if (cursorEducation) {
   setInterval(() => {
     cursorEducation.style.opacity = cursorEducation.style.opacity === '0' ? '1' : '0';
   }, 400);
 }
 
 if (cursorEducation) {
   setInterval(() => {
     if (charIndexEducation < textEducation.length) {
       let charEducation = textEducation.charAt(charIndexEducation);
       let typedTextEducation = cursorEducation.previousElementSibling.innerText;
       cursorEducation.previousElementSibling.innerText = typedTextEducation + charEducation;
       charIndexEducation++;
     }
   }, 75);
 }

 //CONTACT//
 let cursorContact = document.querySelector('.CursorContact');
 const textContact = 'Contact me';
 let charIndexContact = 0;
 
 if (cursorContact) {
   setInterval(() => {
     cursorContact.style.opacity = cursorContact.style.opacity === '0' ? '1' : '0';
   }, 400);
 }
 
 if (cursorContact) {
   setInterval(() => {
     if (charIndexContact < textContact.length) {
       let charContact = textContact.charAt(charIndexContact);
       let typedTextContact = cursorContact.previousElementSibling.innerText;
       cursorContact.previousElementSibling.innerText = typedTextContact + charContact;
       charIndexContact++;
     }
   }, 75);
 } 

 //CAREER//

 let cursorCareer = document.querySelector('.CursorCareer');
 const textCareer = 'Career';
 let charIndexCareer = 0;
 
 if (cursorCareer) {
   setInterval(() => {
     cursorCareer.style.opacity = cursorCareer.style.opacity === '0' ? '1' : '0';
   }, 400);
 }
 
 if (cursorCareer) {
   setInterval(() => {
     if (charIndexCareer < textCareer.length) {
       let charCareer = textCareer.charAt(charIndexCareer);
       let typedTextCareer = cursorCareer.previousElementSibling.innerText;
       cursorCareer.previousElementSibling.innerText = typedTextCareer + charCareer;
       charIndexCareer++;
     }
   }, 75);
 } 

 //PERSONAL//

 let cursorPersonal = document.querySelector('.CursorPersonal');
 const textPersonal= 'Personal Details';
 let charIndexPersonal = 0;
 
 if (cursorPersonal) {
   setInterval(() => {
     cursorPersonal.style.opacity = cursorPersonal.style.opacity === '0' ? '1' : '0';
   }, 400);
 }
 
 if (cursorPersonal) {
   setInterval(() => {
     if (charIndexPersonal < textPersonal.length) {
       let charPersonal = textPersonal.charAt(charIndexPersonal);
       let typedTextPersonal = cursorPersonal.previousElementSibling.innerText;
       cursorPersonal.previousElementSibling.innerText = typedTextPersonal + charPersonal;
       charIndexPersonal++;
     }
   }, 75);
 } 

 