console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.background = "red";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.background = "black";
button.style.color = "white";
button.style.width = "7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.padding = "1rem";
button.style.fontSize = "1.1rem";
myInput.style.padding = "1rem";

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
list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway Web</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------
const myList = document.getElementsByClassName("list");
console.log(myList); //? HTML Collection
console.log(myList[0].innerText);

//? HRML Collection'larda Dizi metotlari dogrudan kullanilamaz.
//? Spread ve Array.from() ile kullanilabilri hale gelir.

//?Array.from()

//! HTML koleksiyonunu diziye dönüştürme
const myListArray = Array.from(myList);
//! Dizi üzerinde forEach döngüsü oluşturma ve her bir öğenin içeriğini konsola yazdırma
myListArray.forEach((item) => console.log(item.innerText));

//! Alternatif olarak, yayma operatörünü kullanarak doğrudan HTML koleksiyonunu diziye dönüştürme ve işlem yapma
[...myList].forEach((item) => console.log(item.innerText));

//! Yayma operatörünü kullanarak koleksiyonu diziye dönüştürme ve forEach döngüsüyle her bir öğenin CSS rengini kırmızı olarak ayarlama
[...myList].forEach((item) => (item.style.color = "red"));


//! const myListArray = Array.from(myList);
//! myListArray.forEach((item) => console.log(item.innerText));
// 
// ?Spread
//! [...myList].forEach((item) => console.log(item.innerText));
// 
//! [...myList].forEach((item) => (item.style.color = "red"));

//* ========================================
//*              QUERYSELECTOR()
//* ========================================


//? 1- queryselector() etiket secebilir.

//! HTML'de ilk <li> öğesini seçme
const myLi = document.querySelector("li");

//! Seçilen <li> öğesinin içeriğini konsola yazdırma
console.log(myLi.innerText);

//! Seçilen <li> öğesinin metin rengini sarı yeşil olarak ayarlama
myLi.style.color = "yellowgreen";


//! const myLi = document.querySelector("li");
// console.log(myLi.innerText);
// myLi.style.color = "yellowgreen";

//? 2- queryselector() class secebilir.

//! HTML'de sınıfı "item-list" olan bir öğeyi seçme
const itemList = document.querySelector(".item-list");

//! Seçilen öğenin arka plan rengini griye ayarlama
itemList.style.background = "grey";


// const itemList = document.querySelector(".item-list");
// itemList.style.background = "grey";
// 
//? 3- queryselector() id secebilir.

//! HTML'de sınıfı "item-list" olan bir öğeyi seçme
const itemList = document.querySelector(".item-list");

// Seçilen öğenin arka plan rengini griye ayarlama
itemList.style.background = "grey";


// const input = document.querySelector("#input");
// console.log(input.value);
// 
// document.querySelector("#btn").style.cursor = "pointer";
// 
//? 4- queryselector() ile CSS deki gibi secim yapilabilir.

//! HTML'de sınıfı "item-list" olan bir öğenin içindeki h2 öğesini seçme
const itemH2 = document.querySelector(".item-list h2");

//! Seçilen h2 öğesinin metin rengini mora ayarlama
itemH2.style.color = "purple";

//! HTML'de bir input öğesini seçme, bu öğe türü "button" olan bir input öğesi olmalıdır
const myBtn = document.querySelector("input[type='button']");

//! Seçilen input öğesini konsola yazdırma
console.log(myBtn);


// const itemH2 = document.querySelector(".item-list h2");
// itemH2.style.color = "purple";
// 
// const myBtn = document.querySelector("input[type='button']");
// console.log(myBtn);
// 
//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

//! HTML belgesindeki tüm <ul> içindeki <li> öğelerini seçme
const lists = document.querySelectorAll("ul li");

// Seçilen öğelerin bir NodeList olduğunu ve bu NodeList'i konsola yazdırma
console.log(lists); // NodeList

// NodeList'teki her bir <li> öğesinin içeriğini konsola yazdırma
lists.forEach((li) => console.log(li.innerText));

// HTML belgesindeki belirli bir <section> içindeki üçüncü <li> öğesinin içeriğini konsola yazdırma
console.log(document.querySelectorAll("section ul li:nth-child(3)")[0].innerText);

// HTML belgesindeki belirli bir <section> içindeki üçüncü <li> öğesinin içeriğini konsola yazdırma
console.log(document.querySelector("section ul li:nth-child(3)").innerText);


// const lists = document.querySelectorAll("ul li");
// console.log(lists); //? nodelist
// 
// lists.forEach((li) => console.log(li.innerText));
// 
// console.log(
  //  document.querySelectorAll("section ul li:nth-child(3)")[0].innerText
// );
// 
//  console.log(document.querySelector("section ul li:nth-child(3)").innerText);
// 