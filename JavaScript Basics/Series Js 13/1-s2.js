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
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.borderRadius = "10px";
button.style.padding = "1rem";
muInput.style.fontSize = "1.1rem"
muInput.style.padding = "1rem"


//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*EXAMPLE-3
//*-------------------------------------------

const list = document.getElementsByTagName("li");
console.log(list); //? HTML Collection
list[2].style.color = "red";
const elementThree = list.item(3);
elementThree.style.color = "blue";
elementThree.textContent = "React / Vue / Angular";

list[4].innerText = "Django / Flask";

console.log(list[1].textContent);
console.log(list[1].innerText);

//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)
list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway 
Web</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------