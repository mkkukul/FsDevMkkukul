console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

// Belirli bir id'ye sahip olan <h1> elementini seçer
const h1 = document.getElementById("header");

//! Seçilen elementi konsola yazdırır
console.log(h1);

//! Seçilen <h1> elementinin metin rengini beyaz olarak ayarlar
h1.style.color = "white";

//! Seçilen <h1> elementinin arka plan rengini kırmızı olarak ayarlar
h1.style.background = "red";



// const h1 = document.getElementById("header");
// console.log(h1);
// h1.style.color = "white";
// h1.style.background = "red";
// 
//* EXAMPLE-2
//*-------------------------------------------

//! Belirli bir id'ye sahip olan <input> elementini seçer
const myInput = document.getElementById("input");

//! Belirli bir id'ye sahip olan <btn> elementini seçer
const button = document.getElementById("btn");

//! Butonun stiline çeşitli özellikler eklenir
button.style.background = "black"; // Arka plan rengi siyah olarak ayarlanır
button.style.color = "white"; // Metin rengi beyaz olarak ayarlanır
button.style.width = "7rem"; // Genişlik 7 rem olarak ayarlanır
button.style.border = "none"; // Kenarlık eklenmez
button.style.borderRadius = "10px"; // Köşeler 10 piksel olarak yuvarlanır
button.style.padding = "1rem"; // İç boşluklar 1 rem olarak ayarlanır
button.style.fontSize = "1.1rem"; // Yazı tipi boyutu 1.1 rem olarak ayarlanır

//! Giriş kutusunun stiline iç boşluk eklenir
myInput.style.padding = "1rem"; // İç boşluklar 1 rem olarak ayarlanır


// const myInput = document.getElementById("input");
// const button = document.getElementById("btn");
// button.style.background = "black";
// button.style.color = "white";
// button.style.width = "7rem";
// button.style.border = "none";
// button.style.borderRadius = "10px";
// button.style.padding = "1rem";
// button.style.fontSize = "1.1rem";
// myInput.style.padding = "1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*EXAMPLE-3
//*-------------------------------------------

//! Tüm <li> elementlerini içeren bir HTML koleksiyonunu alır
const list = document.getElementsByTagName("li");

//! Koleksiyonu konsola yazdırır (HTML Collection)
console.log(list);

//! Listede bulunan üçüncü öğenin metin rengini kırmızıya ayarlar
list[2].style.color = "red";

//! Listede bulunan dördüncü öğeyi alır
const elementThree = list.item(3);

//! Dördüncü öğenin metin rengini maviye ayarlar
elementThree.style.color = "blue";

//! Dördüncü öğenin metnini değiştirir
elementThree.textContent = "React / Vue / Angular";

//! Listede bulunan beşinci öğenin içeriğini değiştirir
list[4].innerText = "Django / Flask";

//! Listede bulunan ikinci öğenin metnini konsola yazdırır
console.log(list[1].textContent);

//! Listede bulunan ikinci öğenin iç metnini konsola yazdırır
console.log(list[1].innerText);


// const list = document.getElementsByTagName("li");
// console.log(list); //? HTML Collection
// list[2].style.color = "red";
// const elementThree = list.item(3);
// elementThree.style.color = "blue";
// elementThree.textContent = "React / Vue / Angular";
// 
// list[4].innerText = "Django / Flask";
// 
// console.log(list[1].textContent);
// console.log(list[1].innerText);
// 
//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)
list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway Web</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------

//! "list" sınıfına sahip tüm öğeleri içeren bir HTML koleksiyonunu alır
const myList = document.getElementsByClassName("list");

//! Koleksiyonu konsola yazdırır (HTML Collection)
console.log(myList);

//! Koleksiyondaki ilk öğenin iç metnini konsola yazdırır
console.log(myList[0].innerText);

// const myList = document.getElementsByClassName("list");
// console.log(myList); //? HTML Collection
// console.log(myList[0].innerText);

//? HRML Collection'larda Dizi metotlari dogrudan kullanilamaz.
//? Spread ve Array.from() ile kullanilabilri hale gelir.

//?Array.from()

//! myList HTML Collection'ı bir diziye dönüştürür
const myListArray = Array.from(myList);

//! Dizideki her bir öğenin iç metnini konsola yazdırır
myListArray.forEach((item) => console.log(item.innerText));

//! Spread operatörü kullanarak myList'ı bir diziye dönüştürür ve her bir öğenin iç metnini konsola yazdırır
[...myList].forEach((item) => console.log(item.innerText));

//! Spread operatörü kullanarak myList'ı bir diziye dönüştürür ve her bir öğenin metninin rengini kırmızıya ayarlar
[...myList].forEach((item) => (item.style.color = "red"));


// const myListArray = Array.from(myList);
// myListArray.forEach((item) => console.log(item.innerText));
// 
// ?Spread
// [...myList].forEach((item) => console.log(item.innerText));
// 
// [...myList].forEach((item) => (item.style.color = "red"));

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//? 1- queryselector() etiket secebilir.

//! İlk <li> öğesini seçer
const myLi = document.querySelector("li");

//! Seçilen <li> öğesinin iç metnini konsola yazdırır
console.log(myLi.innerText);

//! Seçilen <li> öğesinin metninin rengini sarı yeşil (yellowgreen) olarak ayarlar
myLi.style.color = "yellowgreen";


// const myLi = document.querySelector("li");
// console.log(myLi.innerText);
// myLi.style.color = "yellowgreen";
// 
//? 2- queryselector() class secebilir.

//! ".item-list" sınıfına sahip olan bir öğeyi seçer
const itemList = document.querySelector(".item-list");


//! Seçilen öğenin arka plan rengini gri (grey) olarak ayarlar
itemList.style.background = "grey";


// const itemList = document.querySelector(".item-list");
// itemList.style.background = "grey";

//? 3- queryselector() id secebilir.

//! id'si "input" olan bir input öğesini seçer
const input = document.querySelector("#input");

//! Seçilen input öğesinin değerini konsola yazdırır
console.log(input.value);

//! id'si "btn" olan bir düğmenin imleç stilini "pointer" (işaretçi) olarak ayarlar
document.querySelector("#btn").style.cursor = "pointer";


// const input = document.querySelector("#input");
// console.log(input.value);
// 
// document.querySelector("#btn").style.cursor = "pointer";
// 
//? 4- queryselector() ile CSS deki gibi secim yapilabilir.

//! "item-list" sınıfına sahip bir div içindeki h2 başlığını seçer
const itemH2 = document.querySelector(".item-list h2");

//! Seçilen h2 başlığının metin rengini mor olarak ayarlar
itemH2.style.color = "purple";

//! input türü "button" olan bir düğmeyi seçer
const myBtn = document.querySelector("input[type='button']");

//! Seçilen düğmeyi konsola yazdırır
console.log(myBtn);


// const itemH2 = document.querySelector(".item-list h2");
// itemH2.style.color = "purple";
// 
// const myBtn = document.querySelector("input[type='button']");
// console.log(myBtn);

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================



// const lists = document.querySelectorAll("ul li");
// console.log(lists); //? nodelist
// 
// lists.forEach((li) => console.log(li.innerText));
// 
// console.log(
  // document.querySelectorAll("section ul li:nth-child(3)")[0].innerText
// );
// console.log(document.querySelector("section ul li:nth-child(3)").innerText);
// 