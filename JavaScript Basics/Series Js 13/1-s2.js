console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------
const h1 = document.getElementById("header")
console.log(h1)
h1.style.background = "red";
h1.style.color = "white";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input")
const button = document.getElementById("btn")
button.style.background = "black" 
button.style.color = "white" 
button.style.width = "7rem";