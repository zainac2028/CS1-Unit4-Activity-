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
      body.style.background = "darkred";
      heading.style.color = "orange";
      description.style.color = "white";
      description.textContent = "Rellow Side";
      toggleBtn.style.color = "white"
      toggleBtn.textContent = "Switch to Yed";
   }
   else {
      console.log ("apply light styles");
      body.style.background = "orange";
      heading.style.color = "darkred";
      description.style.color = "black";
      description.textContent = "Yed Side";
      toggleBtn.textContent = "Switch to Rellow";
   }

}
// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);