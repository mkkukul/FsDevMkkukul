// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

const isimler =["ahmet", "ismet", "can", "canan", "Mathew" ];
// !isimleri yazdırır

console.log(isimler);
console.log(typeof isimler);
//! kaç tane olduğunu
console.log(isimler.length);
const bosDizi = [];
console.log(bosDizi);

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem



// ! 2.Yöntem (Object Constructor)
const diller = ["C++", "Javasciprt", "Assembly", "Go", "Ruby"];
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);


//! 10 elemanlik bos bir Array oluşturdu
const numbers1 = new Array(10);
console.log(numbers1);

// ! 3.Yöntem (Array.of())
const veriler = Array.of(1, 2, 3)
console.log(veriler);

const veri = Array.of("Deneme");
console.log(veri);

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//!  Diziden veri okuma

console.log(diller[1]);
const go = diller[3];
console.log(go);
console.log(isimler[isimler.length-1]);
// ? at() son elemen için
console.log(isimler.at(-1));
//!  Diziye veri yazma
// const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
isimler[1] = "saffet"
console.log(isimler); 


//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];

//? numbers dizisinin son elementinin degerini bir arttirin

//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.


//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.



//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================


//** pop() son elemanı siler ve sildigi elemani dondurur.



//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.




//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.



//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur



//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri



//* Dizinin tamamini ters siraya cevirir.


//* sort() Diziyi alfabetik olarak siralar.



//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.




//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.


//* fill()

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================


//* includes()
//*-----------------------------------------------------------


//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.



//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.



//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin


//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin