// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

const isimler = ["ahmet", "ismet", "can", "canan", "Mathew"];

//! İsimleri yazdırır
console.log(isimler); // ["ahmet", "ismet", "can", "canan", "Mathew"]

//! Dizinin veri türünü yazdırır (Array)
console.log(typeof isimler);

//! Dizide kaç eleman olduğunu yazdırır
console.log(isimler.length); // 5

//! Boş bir dizi oluşturulur
const bosDizi = [];

//! Boş diziyi yazdırır (içinde hiçbir eleman olmadığı için [])
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

//! 1. Dizi oluşturma yöntemi: Dizi literali
const diller = ["C++", "Javascript", "Assembly", "Go", "Ruby"];
console.log(diller); // ["C++", "Javascript", "Assembly", "Go", "Ruby"]

//! 2. Dizi oluşturma yöntemi: Array constructor'ı kullanma
const numbers = new Array(3, 2, 1);
console.log(numbers); // [3, 2, 1]

//! Bu örnekte, diller adında bir dizi literali kullanılarak diller dizisi oluşturulmuş ve yazdırılmıştır. Ardından, numbers adında bir Array constructor kullanılarak sayılar dizisi oluşturulmuş ve yazdırılmıştır.

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

//! Bu örnekte, Array.of(1, 2, 3) ifadesiyle [1, 2, 3] dizisi oluşturulmuş ve Array.of("Deneme") ifadesiyle de ["Deneme"] dizisi oluşturulmuştur.

// const veriler = Array.of(1, 2, 3)
// console.log(veriler);
// 
// const veri = Array.of("Deneme");
// console.log(veri);
// 
//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//!  Diziden veri okuma

console.log(diller[1]); //! Dizinin ikinci elemanını (indeks 1) konsola yazdırır.
const go = diller[3]; //! Dizinin dördüncü elemanını `go` adlı bir değişkene atar.
console.log(go); //! `go` değişkenini konsola yazdırır.
console.log(isimler[isimler.length - 1]); //! `isimler` dizisinin son elemanını konsola yazdırır.
console.log(isimler.at(-1)); //! `at()` metodu ile dizinin son elemanını konsola yazdırır. `-1` kullanarak sondan başa doğru indeksleme yapabilirsiniz.
isimler[1] = "saffet"; //! `isimler` dizisinin ikinci elemanını "saffet" ile değiştirir.
console.log(isimler); //! Güncellenmiş `isimler` dizisini konsola yazdırır.



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

kisiler[5][1]--; // kisiler dizisinin 5. elemanının (yaslar dizisi) 1. elemanını azaltır.
console.log(kisiler);
// Önceki durum: ["Ahmet", "Can", 2022, 32, true, [22, 44, 55]]
// Yeni durum: ["Ahmet", "Can", 2022, 31, true, [22, 43, 55]]
// 1. eleman olan "Can"ın yaşını bir azaltır.

console.log(yaslar);
// Önceki durum: [22, 44, 55]
// Yeni durum: [22, 43, 55]
// kisiler dizisinde yapılan değişiklik, yaslar dizisine de yansır.


// kisiler[5][1]--;
// console.log(kisiler);
// !
// console.log(yaslar);

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================


//** pop() son elemanı siler ve sildigi elemani dondurur.

const arabalar = ["BMW", "MERCEDES", "Fiat", "Anadol"];
// Önceki durum: ["BMW", "MERCEDES", "Fiat", "Anadol"]

const silinen = arabalar.pop();
// pop() metodu, dizinin sonundaki elemanı çıkarır ve çıkarılan elemanı döndürür.
// Şu anki durum: ["BMW", "MERCEDES", "Fiat"]
// Silinen eleman: "Anadol"

console.log(arabalar, silinen);
// Konsola yazdırılanlar: ["BMW", "MERCEDES", "Fiat"] "Anadol"


// const arabalar = ["BMW", "MERCEDES", "Fiat", "Anadol"];
// arabalar.pop();
// const silinen =arabalar.pop();
// console.log(arabalar,silinen);
// 

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

// const arabalar = ["BMW", "MERCEDES", "Fiat", "Anadol"];
// Önceki durum: ["BMW", "MERCEDES", "Fiat", "Anadol"]

const n = arabalar.push("Citroen");
// push() metodu, dizinin sonuna yeni bir eleman ekler ve dizinin yeni uzunluğunu döndürür.
// Şu anki durum: ["BMW", "MERCEDES", "Fiat", "Anadol", "Citroen"]
// Yeni uzunluk: 5

console.log(arabalar, n);
// Konsola yazdırılanlar: ["BMW", "MERCEDES", "Fiat", "Anadol", "Citroen"] 5


// const n = arabalar.push("Citroen");
// console.log(arabalar,n);



//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.

// const arabalar = ["BMW", "MERCEDES", "Fiat", "Anadol"];
// Önceki durum: ["BMW", "MERCEDES", "Fiat", "Anadol"]

const n1 = arabalar.unshift("Audi");
// unshift() metodu, dizinin başına yeni bir eleman ekler ve dizinin yeni uzunluğunu döndürür.
// Şu anki durum: ["Audi", "BMW", "MERCEDES", "Fiat", "Anadol"]
// Yeni uzunluk: 5

console.log(arabalar, n1);
// Konsola yazdırılanlar: ["Audi", "BMW", "MERCEDES", "Fiat", "Anadol"] 5


// const  n1 = arabalar.unshift("Audi");
// console.log(arabalar,n1);


//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur

// const arabalar = ["Audi", "BMW", "MERCEDES", "Fiat", "Anadol"];
// Önceki durum: ["Audi", "BMW", "MERCEDES", "Fiat", "Anadol"]

const Audi = arabalar.shift();
// shift() metodu, dizinin başındaki elemanı çıkarır ve bu elemanı döndürür.
// Şu anki durum: ["BMW", "MERCEDES", "Fiat", "Anadol"]
// Çıkarılan eleman: "Audi"

console.log(arabalar, Audi);
// Konsola yazdırılanlar: ["BMW", "MERCEDES", "Fiat", "Anadol"] "Audi"


// const Audi = arabalar.shift();
// console.log(arabalar,Audi);
// 

//* splice()

// const arabalar = ["BMW", "MERCEDES", "Fiat", "Anadol"];
// Önceki durum: ["BMW", "MERCEDES", "Fiat", "Anadol"]

arabalar.splice(1, 0, "Passat");
// splice metodu, dizinin belirli bir konumundan başlayarak öğeler ekler veya çıkarır.
// 1. parametre: Eklenecek veya çıkarılacak elemanların başlangıç indeksi (1. indeks)
// 2. parametre: Kaç elemanın çıkarılacağı (bu durumda 0, yani çıkarılmayacak)
// 3. parametre ve sonrası: Eklenen yeni elemanlar ("Passat" ekleniyor)

console.log(arabalar);
// Konsola yazdırılanlar: ["BMW", "Passat", "MERCEDES", "Fiat", "Anadol"]


// arabalar.splice(1,0,"Passat");
// console.log(arabalar);
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
// arabalar.splice(3,1,"Honda","Toyota"); birden fala eklenebilir
arabalar.splice(3,1,"Honda");
console.log(arabalar);


//* Dizinin tamamini ters siraya cevirir.

// const arabalar = ["BMW", "Passat", "MERCEDES", "Fiat", "Anadol"];
// Önceki durum: ["BMW", "Passat", "MERCEDES", "Fiat", "Anadol"]

arabalar.reverse();
// reverse metodu, bir dizinin elemanlarını tersine çevirir.

console.log(arabalar);
// Konsola yazdırılanlar: ["Anadol", "Fiat", "MERCEDES", "Passat", "BMW"]


// arabalar.reverse();
// console.log(arabalar);


//* sort() Diziyi alfabetik olarak siralar. hizlama sayiları sıralamak için kullanılmaz

isimler.sort()
console.log(isimler)
const sayilar = [2, 3, 4, 11, 22, 5, 6, 7]
sayilar.sort();
console.log(sayilar);
 sayilar.sort((a,b) => a-b);
 console.log(sayilar);


// isimler.sort()
// console.log(isimler)
// const sayilar = [2, 3, 4, 11, 22, 5, 6, 7]
// sayilar.sort();
// console.log(sayilar);
//  sayilar.sort((a,b) => a-b);
//  console.log(sayilar);

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir. başka fonsiyonmantıgı oluşturulabilir




//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.


//* fill()

const array1 = [1, 2, 3, 4];
// Önceki durum: [1, 2, 3, 4]

array1.fill(0);
// Diziyi sıfırlar ile doldurur.

console.log(array1);
// Konsola yazdırılanlar: [0, 0, 0, 0]

array1.fill(1, 2, 4);
// İndeks 2'den başlayarak (dahil) indeks 4'e kadar (hariç) olan elemanları 1 ile doldurur.

console.log(array1);
// Konsola yazdırılanlar: [0, 0, 1, 1]

array1.fill(-1, 1);
// İndeks 1'den başlayarak sona kadar olan elemanları -1 ile doldurur.

console.log(array1);
// Konsola yazdırılanlar: [0, -1, -1, -1]


// const array1 = [1, 2, 3, 4];
// array1.fill(0);
// console.log(array1);
// 
// array1.fill(1, 2, 4);
// console.log(array1);
// array1.fill(-1, 1); //* 1. eleman ve sonrasini -1 yap
// console.log(array1);
//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"];

//* includes()
//*-----------------------------------------------------------

// const sayilar1 = [1, 2, 3, 4, 5];

console.log(sayilar1.includes(5));
// Konsola yazdırılan: true
// Dizi içinde 5 değeri bulunduğu için true döner.

console.log(sayilar1.includes("5"));
// Konsola yazdırılan: false
// Dizi içinde "5" değeri string olarak bulunmaz, bu nedenle false döner.

// console.log(sayilar1.includes(5));
// console.log(sayilar1.includes("5"));

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

const sayilar1 = [1, 2, 3, 4, 5, 2];

console.log(sayilar1.indexOf(2));
// Konsola yazdırılan: 1
// 2 değerinin ilk bulunduğu indeks 1'dir.

console.log(sayilar1.lastIndexOf(2));
// Konsola yazdırılan: 5
// 2 değerinin son bulunduğu indeks 5'tir.

console.log(sayilar1.lastIndexOf(4));
// Konsola yazdırılan: 3
// 4 değerinin son bulunduğu indeks 3'tür.

console.log(sayilar1.lastIndexOf(6));
// Konsola yazdırılan: -1
// 6 değeri dizide bulunmadığı için -1 döner.


// console.log(sayilar1.indexOf
  // (2)); //? 2
  // console.log(sayilar1.lastIndexOf
  // (2)); //? 5
  // console.log(sayilar1.lastIndexOf
  // (4)); //? -1

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir. değiştirmez orginali bozmaz

const sayilar1 = [1, 2, 3, 4, 5];

console.log(sayilar1.join(" "));
// Konsola yazdırılan: "1 2 3 4 5"
// Dizideki elemanlar arasına boşluk karakteri ekleyerek birleştirir.

console.log(sayilar1.join());
// Konsola yazdırılan: "1,2,3,4,5"
// Varsayılan olarak, elemanlar arasına virgül ekleyerek birleştirir.

console.log(sayilar1);
// Konsola yazdırılan: [1, 2, 3, 4, 5]
// Dizi orijinal haliyle değişmez.


// console.log(sayilar1.join(" "));
// console.log(sayilar1.join()); 
// 3 5...
// console.log(sayilar1);
// 
//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());
// Konsola yazdırılan: "1,2,3,4,5"
// Varsayılan olarak, elemanlar arasına virgül ekleyerek birleştirir.

console.log(sayilar1);
// Konsola yazdırılan: [1, 2, 3, 4, 5]
// Dizi orijinal haliyle değişmez.

// console.log(sayilar1.toString());

//* slice() Dizi içindeki belirli bir bölümü kesip, yeni bir dizi oluşturur.
//*-----------------------------------------------------------

const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];

// 2. indisten başlayarak sona kadar olan elemanları içeren yeni bir dizi oluşturur.
const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar, arabalar1);
// Konsola yazdırılan:
// ["Fiat", "Anadol"] ["BMW", "Mercedes", "Fiat", "Anadol"]

// 1. indisten başlayarak 3. indise kadar olan elemanları içeren yeni bir dizi oluşturur.
const yeniArabalar1 = arabalar1.slice(1, 3);
console.log(yeniArabalar1);
// Konsola yazdırılan:
// ["Mercedes", "Fiat"]



// const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];
// const yeniArabalar = arabalar1.slice(2);
// console.log(yeniArabalar, arabalar1);
// 
// const yeniArabalar1 = arabalar1.slice(1, 3);
// console.log(yeniArabalar1);

//* concat() İki veya daha fazla diziyi birleştirir, yeni bir dizi oluşturur.
//*-----------------------------------------------------------

const yazilar = ["Bugun", "hava", "cok", "guzel"];
const numbersArr = [1, 2, 5, 7];

// İki dizi ve diğer veri tiplerini birleştirme
const combinedArr = yazilar.concat(
  true,
  numbersArr,
  ["aslinda", "cok", "sicak"],
  [["x", "y"]]
);

console.log(combinedArr);
// Konsola yazdırılan:
// ["Bugun", "hava", "cok", "guzel", true, 1, 2, 5, 7, "aslinda", "cok", "sicak", ["x", "y"]]


// const yazilar = ["Bugun", "hava", "cok", "guzel"];
// const numbersArr = [1, 2, 5, 7];
// const combinedArr = yazilar.concat(
  // true,
  // numbersArr,
  // ["aslinda", "cok", "sicak"],
  // [["x", "y"]]
// );
// console.log(combinedArr);

//* every() fonksiyonu, bir dizideki tüm öğelerin belirli bir koşulu sağlayıp sağlamadığını kontrol eden ve sonucu true veya false olarak döndüren bir dizi metodudur.
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

// Dizi tanımı
const yasArray = [18, 22, 78, 34, 78, 79, 15];

// every metoduyla dizideki her elemanın 18 veya daha büyük olup olmadığını kontrol etme
const check = yasArray.every((yas) => yas >= 18);

// Ternary ifadesiyle kontrol sonucuna göre mesaj yazdırma
check
  ? console.log("Dizideki herkesin yaşı 18'den büyüktür")
  : console.log("Dizide 18 yaş altı var");


// 
// const yasArray = [18, 22, 78, 34, 78, 79, 15];
// const check = yasArray.every((yas) => yas >= 18);
// check
  // ? console.log("Dizideki herkesin yasi 18'den buyuktur")
  // : console.log("Dizide 18 yas alti var");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.


// Dizi tanımı
const yasArray = [18, 22, 78, 34, 78, 79, 15];

// some metoduyla dizideki herhangi bir elemanın 80 veya daha büyük olup olmadığını kontrol etme
const buyuk80 = yasArray.some((y) => y >= 80);

// Kontrol sonucunu ekrana yazdırma
console.log(buyuk80); // false


// const buyuk80 = yasArray.some((y) => y >= 80);
// console.log(buyuk80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin

// Dizi tanımı
const yasArray = [18, 22, 78, 34, 78, 79, 15];

// find metoduyla dizideki ilk 30 veya daha büyük yaşlı kişiyi bulma
const yasIlk30 = yasArray.find((yas) => yas >= 30);

// findLast (kendi olmayan özel bir fonksiyon) kullanılarak dizideki son 30 veya daha büyük yaşlı kişiyi bulma
const yasSon30 = yasArray.findLast((yas) => yas >= 30);

// Bulunan yaşları ekrana yazdırma
console.log(yasIlk30, yasSon30);


// const yasIlk30 = yasArray.find((yas) => yas >= 30);
// const yasSon30 = yasArray.findLast((yas) => yas >= 30);
// console.log(yasIlk30, yasSon30);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

// Dizi tanımı
const yasArray = [18, 22, 78, 34, 78, 79, 15];

// findIndex metoduyla dizideki ilk 30 veya daha büyük yaşlı kişinin indeksini bulma
const foundIndex = yasArray.findIndex((yas) => yas >= 30);

// Bulunan indeksi ekrana yazdırma
console.log(foundIndex);



// const foundIndex = yasArray.findIndex((yas) => yas >= 30);
// console.log(foundIndex);