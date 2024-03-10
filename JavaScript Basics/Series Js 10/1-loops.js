//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------

//! Bir dizi tanımlama
const dizi = [-5, 15, 22, -4, 45, 78];

//! Boş diziler tanımlama (negatif ve pozitif sayıları ayırmak için)
const negatifler = [];
const pozitifler = [];

//! dizelereAyir adlı bir fonksiyon tanımlama, bu fonksiyon negatif ve pozitif sayıları ayrıştırır
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

//! dizelereAyir fonksiyonunu kullanarak diziyi negatif ve pozitif sayılara ayırma
dizelereAyir(dizi);

//! Sonuçları ekrana yazdırma
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


//! Bir notlar dizisi tanımlama
const notlar = [55, 77, 23, 89, 100];

//! Toplamı saklamak için bir değişken tanımlama
let toplam = 0;

//! Döngü kullanarak notları topla
for (let i = 0; i < notlar.length; i++) {
  toplam += notlar[i];
}

//! Ortalamayı hesapla ve ekrana yazdır
console.log("ORTALAMA:", toplam / notlar.length);

 
// const notlar = [55, 77, 23, 89, 100];
// let toplam = 0;
// 
// for(let i=0 ; i<notlar.length;i++) {
  // toplam += notlar[i];
// 
// }
// console.log("ORTALAMA:", toplam  / notlar.length);
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

//! Verilen öğrenci dizisi
const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

//! Belirli bir öğrenci isminin dizide kaç kez geçtiğini bulan fonksiyon
const findStudents = (arr, search) => {
  //! Başlangıçta sayacı sıfıra ayarla
  let counter = 0;

  //! Dizi üzerinde döngü
  for (let i = 0; i < arr.length; i++) {
    //! Aranan isim ile dizideki isim karşılaştırılırken küçük harfe çevriliyor
    if (search === arr[i].toLowerCase()) {
      //! Eğer isim bulunursa sayacı artır
      counter++;
    }
  }

  //! Eğer hiç bulunmazsa uygun mesajı döndür, aksi takdirde bulunan sayıyla birlikte mesajı döndür
  if (counter === 0) {
    return `${search} can not be found`;
  } else {
    return `${search} found ${counter} times`;
  }
};

//! Kullanıcıdan isim al
const name = prompt("Please enter a name").toLowerCase();

//! Fonksiyonu çağır ve sonucu ekrana yazdır
console.log(findStudents(students, name));


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

//! Verilen öğrenci dizisi
const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

//! Belirli bir öğrenci isminin dizide kaç kez geçtiğini bulan fonksiyon
const findStudents = (arr, search) => {
  // Başlangıçta sayacı sıfıra ayarla
  let counter = 0;

  // Dizi üzerinde döngü
  for (let i in arr) {
    // Döngü değişkeni i, dizinin indexini temsil eder, ancak bu durumda kullanmak önerilmez
    // Çünkü "in" operatörü dizinin dışındaki özelliklere de ulaşabilir
    // Bu nedenle "of" operatörü kullanmak daha güvenlidir
    if (search === arr[i]) {
      // Eğer isim bulunursa sayacı artır
      counter++;
    }
  }

  // Eğer hiç bulunmazsa uygun mesajı döndür, aksi takdirde bulunan sayıyla birlikte mesajı döndür
  if (!counter) {
    return `${search} can not be found`;
  } else {
    return `${search} found ${counter} times`;
  }
};

//! Kullanıcıdan isim al
const name = prompt("Please enter a name").toLowerCase();

//! Fonksiyonu çağır ve sonucu ekrana yazdır
console.log(findStudents(students, name));


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

//! Belirli bir öğrenci isminin dizide kaç kez geçtiğini bulan fonksiyon
const findStudentsOf = (arr, search) => {
  //! Başlangıçta sayacı sıfıra ayarla
  let counter = 0;

  //! Dizi üzerinde döngü
  for (let item of arr) {
    //! Ternary operatörü kullanarak
    //! search === item ? counter++ : null;

    //! Short-circuit yöntemi ile ifadeyi daha kısa hale getirme
    //! search === item && counter++;

    // Eğer bulunursa counter'ı artır, bulunmasa da counter'ı artır
    search === item || counter++;
  }

  // Eğer hiç bulunmazsa uygun mesajı döndür, aksi takdirde bulunan sayıyla birlikte mesajı döndür
  return !counter
    ? `${search} can not be found`
    : `${search} found ${counter} times`;
};

// Kullanıcıdan isim al
const studentName = prompt("Please enter a name").toLowerCase();

// Fonksiyonu çağır ve sonucu ekrana yazdır
console.log(findStudentsOf(students, studentName));


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