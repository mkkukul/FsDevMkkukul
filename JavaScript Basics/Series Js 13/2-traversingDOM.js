console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------

//! parentElement, parentNode

// HTML belgesindeki bir sınıf adıyla eşleşen ilk öğeyi seçme
const list = document.querySelector(".list");

// Seçilen öğenin doğrudan üst ebeveyn öğesini seçme
const ul = list.parentNode;

// Üst ebeveyn öğenin kenarlığını kırmızı bir çerçeveyle değiştirme
ul.style.border = "2px solid red";

// list'in ebeveyninin ebeveyninin ebeveyninin ebeveyninin ebeveyninin ebeveynini bulma (document'a kadar)
console.log(list.parentNode.parentNode.parentNode.parentNode.parentNode); // document

// list'in ebeveyn öğesini (parentNode) kullanarak bulma
console.log(list.parentElement);


// const list = document.querySelector(".list");
// const ul = list.parentNode;
// ul.style.border = "2px solid red";
// 
// console.log(list.parentNode.parentNode.parentNode.parentNode.parentNode); //? document
// 
// console.log(list.parentElement);
// 


//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer

// list öğesinin en yakın üst öğesini bulma (section öğesi)
const itemListSec = list.closest("section");

// En yakın üst öğe (section) üzerinde bir stil değişikliği yapma
itemListSec.style.background = "grey";


// const itemListSec = list.closest("section");
// itemListSec.style.background = "grey";
// 


//*2- Asagi Yonde traverse
//*----------------------------------------------

// .add-item sınıfına sahip bir HTML öğesini seçme
const addItem = document.querySelector(".add-item");

// Seçilen öğenin alt öğelerine erişim sağlama
console.log(addItem.children);

// Seçilen öğenin ilk alt öğesi olan h2 etiketine erişim sağlama ve rengini mavi yapma
const h2 = addItem.children[0];
h2.style.color = "blue";

// Seçilen öğenin üst üst öğesinin (grandparent) ilk alt öğesine erişim sağlama (genellikle header olur)
console.log(addItem.parentNode.parentNode.children[0]); //? Header

// ul öğesinin ilk çocuğunun içerik metnini yazdırma
console.log(ul.firstElementChild.innerText);

// ul öğesinin son çocuğunun içerik metnini yazdırma
console.log(ul.lastElementChild.innerText);


// const addItem = document.querySelector(".add-item");
// console.log(addItem.children);
// const h2 = addItem.children[0];
// h2.style.color = "blue";
// 
// console.log(addItem.parentNode.parentNode.children[0]); //? Header
// 
// console.log(ul.firstElementChild.innerText);
// console.log(ul.lastElementChild.innerText);
// 


//*3- Yatay Yonde traverse
//*----------------------------------------------

//! nextElementSibling ,previousElementSibling

// ul öğesinin children özelliğine erişim sağlama ve bu öğeleri myList değişkenine atama
const myList = ul.children;
console.log(myList);

// myList'in 2. çocuğunu (3. sıradaki) javascript değişkenine atama
const javascript = myList[2];

// javascript öğesinin bir önceki kardeşini (previousElementSibling) seçme ve içerik metnini yazdırma
const css = javascript.previousElementSibling;
console.log(css.innerText);

// javascript öğesinin bir sonraki kardeşini (nextElementSibling) seçme ve içerik metnini yazdırma
const react = javascript.nextElementSibling;
console.log(react.textContent);

// javascript öğesinin iki önceki kardeşinin içerik metnini yazdırma
console.log(javascript.previousElementSibling.previousElementSibling.innerText);
bunu 


// const myList = ul.children;
// console.log(myList);
// 
// const javascript = myList[2];
// 
// const css = javascript.previousElementSibling;
// console.log(css.innerText);
// const react = javascript.nextElementSibling;
// console.log(react.textContent);
//  console.log(javascript.previousElementSibling.previousElementSibling.innerText);
