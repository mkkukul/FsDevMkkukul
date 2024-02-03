//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------

// Bir dizi tanımlama
const dizi = [-5, 15, 22, -4, 45, 78];

// Boş diziler tanımlama (negatif ve pozitif sayıları ayırmak için)
const negatifler = [];
const pozitifler = [];

// dizelereAyir adlı bir fonksiyon tanımlama, bu fonksiyon negatif ve pozitif sayıları ayrıştırır
const dizelereAyir = (n) => {
  for (let i = 0; i < n.length; i++) {
    // Her elemanı kontrol et
    if (n[i] < 0) {
      // Eğer eleman negatifse, negatifler dizisine ekle
      negatifler.push(n[i]);
    } else {
      // Eğer eleman pozitifse, pozitifler dizisine ekle
      pozitifler.push(n[i]);
    }
  }
};

// dizelereAyir fonksiyonunu kullanarak diziyi negatif ve pozitif sayılara ayırma
dizelereAyir(dizi);

// Sonuçları ekrana yazdırma
console.log(negatifler); // Negatif sayıları içeren dizi
console.log(pozitifler); // Pozitif sayıları içeren dizi
console.log(dizi); // Orijinal dizi



// const dizi = [-5, 15, 22, -4, 45, 78];
// const negatifler = [];
// const pozitifler = [];
// const dizelereAyir = (n) => {
  // for (let i = 0; i < n.length; i++) {
    // if (n[i] < 0) {
      // negatifler.push(n[i]);
    // } else {
      // pozitifler.push(n[i]);
    // }
  // }
// };
// dizelereAyir(dizi);
// 
// console.log(negatifler);
// console.log(pozitifler);
// console.log(dizi);
// 
//?-------------- ÖRNEK -------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
 
const notlar = [55, 77, 23, 89, 100];
let toplam = 0;

for(let i=0 ; i<notlar.length;i++) {
  toplam += notlar[i];

}
console.log("ORTALAMA:", toplam  / notlar.length);
// 
// 
// let toplam = 0;
// 
// for (let i = 0; i < notlar.length; i++) {
  // toplam += notlar[i];
// }
// 
// console.log("ORTALAMA:", toplam / notlar.length);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
// ! 1 Yöntem
// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can","mehmet", "cem", ];
// const findStudents =(arr,search) => {
  // let counter = 0;
  // for(let i in arr){
    // if(search===arr[i]){
      // counter++;
    // };
    // if(counter===0){
      // return `${search} can not be found`;
    // } else{
      // return `${search} found ${counter} times`;
    // };
  // };
// }
// const name =prompt("Please enter a name").toLocaleLowerCase();
// console.log(findStudents(students,name));
// ! 2 Yöntem
// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];
// 
// const findStudents = (arr, search) => {
  // let counter = 0;
  // for (let i in arr) {
    // if (search === arr[i]) {
      // counter++;
    // }
  // }
  // if (!counter) {
    // return `${search} can not be found`;
  // } else {
    // return `${search} found ${counter} times`;
  // }
// };
// 
// const name = prompt("Please enter a name").toLowerCase();
// console.log(findStudents(students, name));
// 
//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.


// const findStudentsOf = (arr, search) => {
  // let counter = 0;
  // for (let item of arr) {
    // ? Ternary
    // search === item ? counter++ : null;
// 
    // ! Short-circuit yöntemi: && => kosul dogru (true) ise ifadeyi calisitir.
    // search === item && counter++;
// 
    // ! Short-circuit yöntemi: || => kosul yanlis (false) ise ifadeyi çalıştır.
    // search === item || counter++;
  // }
// 
  // return !counter
    // ? `${search} can not be found`
    // : `${search} found ${counter} times`;
// };
// 
// const studentName = prompt("Please enter a name").toLowerCase();
// console.log(findStudentsOf(students, studentName));
// 