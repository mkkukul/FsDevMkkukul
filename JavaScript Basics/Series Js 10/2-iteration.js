//* ======================================================
//*                   FOREACH METHOD
//* ======================================================


console.log("****** ITERATION **********");


//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

// Dizi içindeki her bir fiyatı ekrana yazdıran forEach kullanımı
const prices = [100, 250, 50, 89];

// forEach metoduyla dizi içinde gezin ve her bir elemanı ekrana yazdır
prices.forEach((price) => console.log(price));


// const prices = [100, 250, 50, 89];
// prices.forEach((p) => console.log(p));

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */

// Dizi içindeki her bir fiyatı toplayan forEach kullanımı
const prices = [100, 250, 50, 89];

// Toplamı tutacak değişken
let sum = 0;

// forEach metoduyla dizi içinde gezin ve her bir elemanı toplam değişkenine ekle
prices.forEach((price) => (sum += price));

// Toplamı ekrana yazdır
console.log("SUM:", sum);

// NOT: forEach metodu void metodudur ve herhangi bir değer döndürmez. 
// Dolayısıyla, forEach metodunun sonucunu ekrana yazdırdığımızda undefined elde ederiz.
console.log(prices.forEach((price) => (sum += price))); // undefined


// let sum = 0;
// prices.forEach((price) => (sum += price));
// console.log("SUM:", sum);
// 
// ! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
// console.log(prices.forEach((price) => (sum += price))); //! undefined

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

// Dizi içindeki her bir fiyatı toplayan ve her elemanı güncelleyen forEach kullanımı
const prices = [100, 250, 50, 89];

// Toplamı tutacak değişken
let total = 0;

// forEach metoduyla dizi içinde gezin, her bir elemanı toplam değişkenine ekle,
// ve her elemanı güncelle (fiyatı %10 arttır)
prices.forEach((price, index, arr) => {
  total += price;
  console.log(`${index + 1}.iteration: ${total}`);
  arr[index] = Math.trunc(price * 1.1);
});

// Güncellenmiş fiyatları ekrana yazdır
console.log(prices);


// let total = 0;
// prices.forEach((price, index, arr) => {
  // total += price;
  // console.log(`${index +1}.iteration: ${total}`);
  // arr[index] = Math.trunc(price*1.1);
// });
// console.log(prices);

// let total = 0;
// prices.forEach((price, index, arr) => {
  // total += price;
  // console.log(`${index + 1}.iteration: ${total}`);
  // arr[index] = Math.trunc(price * 1.1);
// });
// 
// console.log(prices);
// ! 1 ile 1.1  arasında % 10 Fark var

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

// Dizi içindeki her bir rakamı 5 ile çarpan ve yeni diziyi oluşturan map kullanımı
const rakamlar = [3, 7, 17, 8, 9, 3, 0];

// Her bir elemanı 5 ile çarpan yeni diziyi oluştur
const katAlinmis = rakamlar.map((x) => x * 5);
console.log(katAlinmis);

// Dizi içindeki her bir ismi büyük harfe çevirip yeni diziyi oluşturan map kullanımı
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "Canan"];

// Her bir ismi büyük harfe çevirip yeni diziyi oluştur
const bigNames = names.map((name) => name.toUpperCase());
console.log(bigNames, names);


// const rakamlar = [3,7,17,8,9,3,0];
// const katAlinmis =rakamlar.map((x) =>x*5);
// console.log(katAlinmis);
// 
// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];
// const bigNames = names.map((name) => name.toUpperCase());
// console.log(bigNames,names);
// 
//! fonsiyonun içini görebiliriz

// Dizi içindeki her bir ismi büyük harfe çevirip ekrana yazdıran map kullanımı
console.log(names.map((name) => name.toUpperCase()));


// console.log(names.map((name)=> name.toUpperCase())); 

// const bigNames = names.map((name) => name.toUpperCase());
// console.log(bigNames, names);
// console.log(names.map((name) => name.toUpperCase()));
// 
//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz



// const euro = 18.23;
// const dolar = 18.19;
// const tlPrices = [100, 150, 100, 50, 80];

// ! toPrecision sayı string yapar burada son 3 kısmı gösterir

// TL cinsinden fiyatlar
const tlPrices = [100, 150, 100, 50, 80];

// Döviz kurları
const euro = 18.23;
const dolar = 18.19;

// TL fiyatlarını Euro cinsine dönüştürüp, 3 basamaklı hale getirerek euroPrices dizisine kaydetme
const euroPrices = tlPrices.map((tl) => Number(tl / euro).toPrecision(3));
console.log("Euro Prices:", euroPrices);

// TL fiyatlarını Dolar cinsine dönüştürüp, 2 basamaklı hale getirerek dollarPrices dizisine kaydetme
const dollarPrices = tlPrices.map((tl) => Number(tl / dolar).toFixed(2));
console.log("Dollar Prices:", dollarPrices);

// Koordinatlar
const coordinates = [-100, 150, -32, 43, -20];

// Negatif koordinatları filtreleyerek negativeCoordinates dizisine kaydetme
const negativeCoordinates = coordinates.filter((x) => x < 0);
console.log("Negative Coordinates:", negativeCoordinates);


// const euroPrices = tlPrices.map((tl) => Number(tl / euro).toPrecision(3));
// console.log(euroPrices);
// 
// const dolarPrices = tlPrices.map((tl) => Number(tl / dolar).toFixed(2));
// console.log(dolarPrices);
// 
// const koordinatlar = [-100, 150, -32,43,-20]
// negatifKoordinatlar = koordinatlar.filter((x)=>x<0);
// console.log(negatifKoordinatlar);
// 
//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.



// const products = [
  // "Iphone12",
  // "samsungS20",
  // "lenovo",
  // "macbook pro",
  // "mac air",
  // "Galaxy tablet",
  // "macbook",
  // "Iphone12",
  // "mac air",
  // "lenovo",
  // "macbook pro",
  // "samsungS20",
// ];
//! Orjinal diziyi degistidik.
//?For UpperCase hepsini büyük harf yaptık
// products.map((p, i, arr) => (arr[i] = p.charAt(0).toUpperCase()));

//?For Capitilize
products.map((p, i, arr) => (arr[i] = p[0].toUpperCase() + p.slice(1)));
console.log(products);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//* ======================================================
//*                 FILTER METHOD
//* ======================================================
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const bigThan = salaries.filter((s) => s > 10000);
console.log(bigThan, salaries);

const range = salaries.filter((s) => s >= 6000 && s <= 10000);
console.log(range);

//?-------------- ÖRNEK -------------------
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const lessThan9000Increase = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));

console.log(lessThan9000Increase);

salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))
  .forEach((s) => console.log(s));
//* ======================================================
//*                 REDUCE METHOD
//* ======================================================

//! Bu bir JavaScript kodudur. Amacı, belirli bir maaş listesinin toplamını hesaplamaktır.

// !Maaşları bir dizi içinde tanımlıyoruz. Her bir eleman, bir kişinin maaşını temsil eder.
// !const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// reduce() fonksiyonu, bir dizi üzerinde döngü yaparak dizi elemanlarını bir araya getirir.
// İlk parametre olarak bir fonksiyon alır. Bu fonksiyon, her bir dizi elemanı üzerinde çalışırken nasıl bir işlem yapılacağını tanımlar.
// İkinci parametre olarak ise başlangıç değerini alır. Bu durumda başlangıç değeri 0'dır.
const sumOfSalaries = salaries.reduce((acc, val, i) => acc + val, 0);

// reduce() fonksiyonu tamamlandığında, toplam değeri döndürür. Bu değer, bütün maaşların toplamını temsil eder.

// Son olarak, konsola toplam maaş değerini yazdırıyoruz.
console.log("SUM:", sumOfSalaries);

//! const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//! const sumOfSalaries = salaries.reduce((acc, val, i) => acc + val, 0);

//! console.log("SUM:", sumOfSalaries);

//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

// Bu bir JavaScript kodudur. Amacı, 9000 ve altındaki maaşların %10 artırılarak toplamını hesaplamaktır.

// Maaşları bir dizi içinde tanımlıyoruz. Her bir eleman, bir kişinin maaşını temsil eder.
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//? İlk olarak, maaşları 9000 ve altında olanları filtreleyerek alıyoruz.
// ?filter() fonksiyonu, belirli bir koşulu sağlayan dizi elemanlarını seçer.
const sumOfRaisedSalaries = salaries
  .filter((sal) => sal <= 9000) // 9000 ve altındaki maaşları filtrele
  // Daha sonra, filtrelenen maaşları %10 oranında artırıyoruz. 
  // Math.trunc() fonksiyonu, ondalık kısmı olmayan tam bir sayıya dönüştürür.
  .map((sal) => Math.trunc(sal * 1.1)) // Maaşları %10 artır
  // Artırılan maaşların toplamını hesaplamak için reduce() fonksiyonunu kullanıyoruz.
  .reduce((acc, salary) => acc + salary, 0); // Artırılmış maaşların toplamını hesapla

// Son olarak, konsola artırılmış maaşların toplam değerini yazdırıyoruz.
console.log("Sum Of Raised Salaries:", sumOfRaisedSalaries);


//? const sumOfRaisedSalaries = salaries
  // .filter((sal) => sal <= 9000)
  // .map((sal) => Math.trunc(sal * 1.1))
  // .reduce((acc, salary) => acc + salary, 0);
// !
// ?console.log("Sum Of Raised Salaries:", sumOfRaisedSalaries);
const sumOfSalaries = salaries.reduce((acc, val) => acc + val,0 )
console.log("SUM", sumOfRaisedSalaries)
