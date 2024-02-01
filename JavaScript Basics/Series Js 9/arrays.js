// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

const isimler = ["ahmet", "ismet", "can", "canan", "Mathew"];

// İsimleri yazdırır
console.log(isimler); // ["ahmet", "ismet", "can", "canan", "Mathew"]

// Dizinin veri türünü yazdırır (Array)
console.log(typeof isimler);

// Dizide kaç eleman olduğunu yazdırır
console.log(isimler.length); // 5

// Boş bir dizi oluşturulur
const bosDizi = [];

// Boş diziyi yazdırır (içinde hiçbir eleman olmadığı için [])
console.log(bosDizi);


// const isimler =["ahmet", "ismet", "can", "canan", "Mathew" ];
// !isimleri yazdırır
// 
// console.log(isimler);
// console.log(typeof isimler);
// ! kaç tane olduğunu
// console.log(isimler.length);
// const bosDizi = [];
// console.log(bosDizi);
// 
// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem



// ! 2.Yöntem (Object Constructor)

// 1. Dizi oluşturma yöntemi: Dizi literali
const diller = ["C++", "Javascript", "Assembly", "Go", "Ruby"];
console.log(diller); // ["C++", "Javascript", "Assembly", "Go", "Ruby"]

// 2. Dizi oluşturma yöntemi: Array constructor'ı kullanma
const numbers = new Array(3, 2, 1);
console.log(numbers); // [3, 2, 1]

// Bu örnekte, diller adında bir dizi literali kullanılarak diller dizisi oluşturulmuş ve yazdırılmıştır. Ardından, numbers adında bir Array constructor kullanılarak sayılar dizisi oluşturulmuş ve yazdırılmıştır.

// const diller = ["C++", "Javasciprt", "Assembly", "Go", "Ruby"];
// console.log(diller);
// 
// const numbers = new Array(3, 2, 1);
// console.log(numbers);
// 

//! 10 elemanlik bos bir Array oluşturdu

const numbers1 = new Array(10);
console.log(numbers1); // [ <10 empty items> ]

// Burada numbers1 dizisi 10 elemana sahiptir, ancak her bir elemanı undefined'dir. Bu durum, genellikle bir dizi oluşturulurken uzunluğu belirlemek, ancak içeriği daha sonra doldurmak istendiğinde kullanılır.

// const numbers1 = new Array(10);
// console.log(numbers1);
// 
// ! 3.Yöntem (Array.of())

const veriler = Array.of(1, 2, 3);
console.log(veriler); // [1, 2, 3]

const veri = Array.of("Deneme");
console.log(veri); // ["Deneme"]

// Bu örnekte, Array.of(1, 2, 3) ifadesiyle [1, 2, 3] dizisi oluşturulmuş ve Array.of("Deneme") ifadesiyle de ["Deneme"] dizisi oluşturulmuştur.

// const veriler = Array.of(1, 2, 3)
// console.log(veriler);
// 
// const veri = Array.of("Deneme");
// console.log(veri);
// 
//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//!  Diziden veri okuma

console.log(diller[1]); // Dizinin ikinci elemanını (indeks 1) konsola yazdırır.
const go = diller[3]; // Dizinin dördüncü elemanını `go` adlı bir değişkene atar.
console.log(go); // `go` değişkenini konsola yazdırır.
console.log(isimler[isimler.length - 1]); // `isimler` dizisinin son elemanını konsola yazdırır.
console.log(isimler.at(-1)); // `at()` metodu ile dizinin son elemanını konsola yazdırır. `-1` kullanarak sondan başa doğru indeksleme yapabilirsiniz.
isimler[1] = "saffet"; // `isimler` dizisinin ikinci elemanını "saffet" ile değiştirir.
console.log(isimler); // Güncellenmiş `isimler` dizisini konsola yazdırır.



// console.log(diller[1]);
// const go = diller[3];
// console.log(go);
// console.log(isimler[isimler.length-1]);
//? at() son elemen için
// console.log(isimler.at(-1));
//!  Diziye veri yazma
//const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
// isimler[1] = "saffet"
// console.log(isimler); 
// 

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];

//? numbers dizisinin son elementinin degerini bir arttirin

console.log(numbers); // Diziyi konsola yazdırır. Örneğin, [3, 2, 1]
numbers[numbers.length - 1]++; // Dizinin son elemanını bir artırır. Bu örnekte, [3, 2, 2] olacaktır.
console.log(numbers); // Güncellenmiş diziyi konsola yazdırır.


// console.log(numbers);
// numbers[numbers.length -1]++;
// console.log(numbers);

//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];

console.log(kisiler);
// Örneğin, ["Ahmet", "Can", 2022, 32, true, [22, 44, 55]] gibi bir çıktı alınacaktır.

const yas55 = kisiler[5][2];
// Dizinin 5. elemanı bir dizi olduğu için, bu diziden 2. elemanı seçer.
// Bu örnekte, yas55 değeri 55 olacaktır.

console.log(yas55); // 55


// const yaslar = [22, 44, 55];
// const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];
// console.log(kisiler);
// const yas55 = kisiler[5][2];
// const yas55 = kisiler[5][2];
// console.log(yas55);

//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.

// kisiler[5][1]--;
// console.log(kisiler);
// !
// console.log(yaslar);

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================


//** pop() son elemanı siler ve sildigi elemani dondurur.
const arabalar = ["BMW", "MERCEDES", "Fiat", "Anadol"];
// arabalar.pop();
const silinen =arabalar.pop();
console.log(arabalar,silinen);


//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const n = arabalar.push("Citroen");
console.log(arabalar,n);



//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const  n1 = arabalar.unshift("Audi");
console.log(arabalar,n1);


//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur
const Audi = arabalar.shift();
console.log(arabalar,Audi);


//* splice()
arabalar.splice(1,0,"Passat");
console.log(arabalar);
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
// arabalar.splice(3,1,"Honda","Toyota"); birden fala eklenebilir
arabalar.splice(3,1,"Honda");
console.log(arabalar);


//* Dizinin tamamini ters siraya cevirir.
arabalar.reverse();
console.log(arabalar);


//* sort() Diziyi alfabetik olarak siralar. hizlama sayiları sıralamak için kullanılmaz
isimler.sort()
console.log(isimler)
const sayilar = [2, 3, 4, 11, 22, 5, 6, 7]
sayilar.sort();
console.log(sayilar);
 sayilar.sort((a,b) => a-b);
 console.log(sayilar);

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir. başka fonsiyonmantıgı oluşturulabilir




//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.


//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //* 1. eleman ve sonrasini -1 yap
console.log(array1);
//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes(5));
console.log(sayilar1.includes("5"));

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.
console.log(sayilar1.indexOf
  (2)); //? 2
  console.log(sayilar1.lastIndexOf
  (2)); //? 5
  console.log(sayilar1.lastIndexOf
  (4)); //? -1

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir. değiştirmez orginali bozmaz
console.log(sayilar1.join(" "));
console.log(sayilar1.join()); 
// 3 5...
console.log(sayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar1.toString());

//* slice() Dizi içindeki belirli bir bölümü kesip, yeni bir dizi oluşturur.
//*-----------------------------------------------------------
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];
const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar, arabalar1);

const yeniArabalar1 = arabalar1.slice(1, 3);
console.log(yeniArabalar1);

//* concat() İki veya daha fazla diziyi birleştirir, yeni bir dizi oluşturur.
//*-----------------------------------------------------------
const yazilar = ["Bugun", "hava", "cok", "guzel"];
const numbersArr = [1, 2, 5, 7];
const combinedArr = yazilar.concat(
  true,
  numbersArr,
  ["aslinda", "cok", "sicak"],
  [["x", "y"]]
);
console.log(combinedArr);

//* every() fonksiyonu, bir dizideki tüm öğelerin belirli bir koşulu sağlayıp sağlamadığını kontrol eden ve sonucu true veya false olarak döndüren bir dizi metodudur.
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yasArray = [18, 22, 78, 34, 78, 79, 15];
const check = yasArray.every((yas) => yas >= 18);
check
  ? console.log("Dizideki herkesin yasi 18'den buyuktur")
  : console.log("Dizide 18 yas alti var");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 = yasArray.some((y) => y >= 80);
console.log(buyuk80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin
const yasIlk30 = yasArray.find((yas) => yas >= 30);
const yasSon30 = yasArray.findLast((yas) => yas >= 30);
console.log(yasIlk30, yasSon30);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = yasArray.findIndex((yas) => yas >= 30);
console.log(foundIndex);