// Create a boolean variable to track the mode 
let darkMode = false

/* NEW JS FUNCTION : document.querySelector() 
   lets you select an HTLM element and store 
   the reference in a variable for JS to use
*/

 const body = document.querySelector("body");
 const heading = document.querySelector("#main-heading");
 const description = document.querySelector("#description");
 const toggleBtn = document.querySelector("#toggle")
 const image = document.querySelector ("#image")
 // CONST is like LET, but the value won't change

 // JS can now change attributes and properties!
 heading.textContent = "Light and Dark Website"; // JS wrote HTML code!
 heading.style.color = "crimson"; // JS wrote CSS code!

 // Define what happens when button is clicked 
function toggleMode() {
   console.log("triggered function")
   // 1. Flip is the boolean to reflect the mode
   darkMode = !darkMode;
   console.log(darkMode);
   // 2. Conditionally apply styles based on mode
   if (darkMode == true) {    
      console.log ("apply dark styles");
      body.style.background = "crimson";
      heading.style.color = "white";
      description.style.color = "white";
      description.textContent = "Strawberry Jam ";
      toggleBtn.textContent = "Rabbit Clown";
      image.src = "redsonny.webp";
   }
   else {
      console.log ("apply light styles");
      body.style.background = "black";
      heading.style.color = "white";
      description.style.color = "white";
      description.textContent = "Rabbit Clown";
      toggleBtn.textContent = "Strawberry Jam";
      image.src = "blacksonny.png";
   }

}
// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);


// REVIEW
// 1. Select an element to target (button)
const hackerBtn = document.querySelector("#hacker");
// 2. Attach a function to the button 
hackerBtn.addEventListener("click", setHacker);
// 3. Define what happens when triggered 
function setHacker() {
   body.style.background = "black";
   body.style.fontFamily = "monospace";
   description.style.color = "rgb(55, 255, 0)";
   description.textContent = "YOU GOT HACKED :1";
   image.src = "hacker.jpg";
   
}

const sackedBtn = document.querySelector("#sacked");
sackedBtn.addEventListener("click", setSacked);
function setSacked() {
   body.style.background = "gray";
   description.style.color = "white";
   description.textContent = "YOU GOT SACKED :(";
   image.src = "sacked .jpg";
}


const lorealbtn = document.querySelector("#loreal")
lorealbtn.addEventListener("click", setLoreal)
function setLoreal () {
   body.style.background = "lightpink"
   description.textContext = 
   image.src = ""
}