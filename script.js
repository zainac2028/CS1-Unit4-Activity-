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
