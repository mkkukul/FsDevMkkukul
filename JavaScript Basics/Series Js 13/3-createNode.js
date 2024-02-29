console.log("**** CREATE NODE ****");

//?Yeni bir P elementi olusturalim

//! Yeni bir <p> öğesi oluşturma
const newP = document.createElement("p");

//! Yeni <p> öğesine id özelliği eklenmesi
newP.id = "new-par";

//! Yeni <p> öğesine class özelliği eklenmesi
newP.setAttribute("class", "new-class");

//! Yeni bir metin düğümü (text node) oluşturma ve içeriğini belirleme
const text = document.createTextNode("This is a new p element");

//! Metin düğümünü (<p> öğesinin içeriği) yeni <p> öğesine eklenmesi
newP.appendChild(text);

//! Oluşturulan yeni <p> öğesinin konsola yazdırılması
console.log(newP);

//! HTML içerisindeki ".item-list h2" seçicisi ile hedeflenen h2 öğesine erişim sağlanması
const h2 = document.querySelector(".item-list h2");

//! h2 öğesinin sonrasına (hemen sonra) yeni oluşturulan <p> öğesinin eklenmesi
h2.after(newP);


//! const newP = document.createElement("p");
//! newP.id = "new-par";
//! newP.setAttribute("class", "new-class");
//! const text = document.createTextNode("This is a new p element");
//! newP.appendChild(text);
//! console.log(newP);
// 
//! const h2 = document.querySelector(".item-list h2");
//! h2.after(newP);

//? getAttribute()

console.log(newP.getAttribute("class")); // Yeni <p> öğesinin "class" özelliğinin değerini alır
console.log(newP.getAttribute("id")); // Yeni <p> öğesinin "id" özelliğinin değerini alır
console.log(newP.getAttribute("name")); // Yeni <p> öğesinin "name" özelliğinin değerini alır (null olacak, çünkü <p> öğesi için varsayılan olarak "name" özelliği tanımlı değildir)


//! console.log(newP.getAttribute("class"));
//! console.log(newP.getAttribute("id"));
// console.log(newP.getAttribute("name"));

//? classList

console.log(newP.classList.contains("par")); // Yeni <p> öğesinin sınıf listesinde "par" sınıfı varsa true, yoksa false döndürür
newP.classList.add("new-class"); // Yeni <p> öğesine "new-class" sınıfını ekler
console.log(newP); // Güncellenmiş <p> öğesini konsola yazdırır
newP.classList.remove("new-class"); // Yeni <p> öğesinden "new-class" sınıfını kaldırır


// console.log(newP.classList.contains("par")); //? true
// newP.classList.add("new-class");
// console.log(newP);
// newP.classList.remove("new-class");

//? INNER HTML (Ciddi Guvenlik aciklari var)

console.log(newP.classList.contains("par")); // Yeni <p> öğesinin sınıf listesinde "par" sınıfı varsa true, yoksa false döndürür
newP.classList.add("new-class"); // Yeni <p> öğesine "new-class" sınıfını ekler
console.log(newP); // Güncellenmiş <p> öğesini konsola yazdırır
newP.classList.remove("new-class"); // Yeni <p> öğesinden "new-class" sınıfını kaldırır


// const ul = document.querySelector("ul");
// ul.innerHTML += `<li id="list-id" class="list">Boostrap</li>`;
// 