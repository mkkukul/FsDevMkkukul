// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

// console.log("**** ARROW ******");
// 
//* ORNEK: Silindir Hacmi
//************************************************/
// 
// const r =Number(prompt("yaricap giriniz"))
// const h =Number(prompt("yukseklik giriniz"))
// const hacimHesapla = (r,h) => Math.PI*r*h;
// console.log(`${r},${h}=> Hacmi: ${hacimHesapla(r,h).toExponential}  `);
// // console.log(`${r} , ${h} => Hacmi: ${hacimHesapla (r,h).toFixed(2)}`);

// const r = Number(prompt("yaricap giriniz:"));
// const h = Number(prompt("yukseklik giriniz:"));

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// // console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);
// Kullanıcıdan yarıçap ve yükseklik bilgisini al
const r = Number(prompt("Yarıçap giriniz:"));
const h = Number(prompt("Yükseklik giriniz:"));

// Hacim hesaplamak için arrow fonksiyonunu kullan
const hacimHesapla = (r, h) => Math.PI * r * r * h;

// Hesaplanan hacmi konsola yazdır
console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// veya
// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);


// //* ORNEK: Yas hesapla
// //************************************************/

// Kullanıcıdan doğum tarihini al
const tarih = Number(prompt("Doğum Tarihini giriniz:"));

// Arrow fonksiyonu kullanarak yaş hesapla
const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};

// Hesaplanan yaş bilgisini konsola yazdır
console.log("YAŞINIZ: " + yasHesapla(tarih));

// Alternatif bir fonksiyon tanımlama
function yasHesapla3(tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
}

// Yeni bir doğum tarihi al ve yaş hesapla
const tarih2 = Number(prompt("Doğum Tarihini giriniz:"));
console.log("YAŞINIZ: " + yasHesapla3(tarih2));


// //! Arrow Func yontemi ile tanimlama

// Kullanıcıdan doğum tarihini al
const tarih = Number(prompt("Doğum Tarihini giriniz:"));

// Arrow fonksiyonu kullanarak yaş hesapla (Uzun versiyon)
const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};

// Alternatif bir arrow fonksiyonu (Kısa versiyon)
const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// Hesaplanan yaş bilgisini konsola yazdır
console.log("YASINIZ (Uzun): " + yasHesapla(tarih));
console.log("YASINIZ (Kısa): " + yasHesaplaKisa(tarih));









// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

// //! Func Expression yontemi ile tanimlama

// Kullanıcıdan doğum tarihini al
const tarih = Number(prompt("Doğum Tarihini giriniz:"));

// Function Expression ile yaş hesapla
const yasHesapla2 = function (tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};

// Function Declaration ile yaş hesapla
function yasHesapla3(tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
}

// Hesaplanan yaş bilgisini konsola yazdır
console.log("YASINIZ (Expression): " + yasHesapla2(tarih));
console.log("YASINIZ (Declaration): " + yasHesapla3(tarih));



// //?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

let stringResult = "1,1";

// Fibonacci dizisini hesapla
const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;

  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    stringResult += "," + fib2;
  }

  return fib2;
};

// Kullanıcıdan n sayısını al
const n = +prompt("n terimini giriniz:");

// n'nin 0'dan küçük veya eşit olup olmadığını kontrol et
if (n <= 0) {
  console.log("Lütfen 0'dan büyük bir sayı giriniz.");
} else {
  // Fibonacci dizisinin n terimini ve tüm diziyi konsola yazdır
  console.log(`FIBO(${n}) = ${fibo(n)}`);
  console.log("Fibonacci Dizisi:", stringResult);
}


// Fibonacci dizisini hesaplamak için kullanılan stringResult değişkeni
let stringResult = "1,1";

// Fibonacci dizisini hesaplayan fonksiyon
const fibo = (n) => {
  // İlk iki terim
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;

  // Fibonacci dizisini hesapla ve stringResult'e ekle
  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    stringResult += "," + fib2;
  }

  // Fibonacci dizisinin n. terimini döndür
  return fib2;
};

// Kullanıcıdan n sayısını al
const n = +prompt("n terimini giriniz:");

// n'nin 0'dan küçük veya eşit olup olmadığını kontrol et
if (n <= 0) {
  console.log("Lütfen 0'dan büyük bir sayı giriniz.");
} else {
  // Fibonacci dizisinin n terimini ve tüm diziyi konsola yazdır
  console.log(`FIBO(${n}) = ${fibo(n)}`);
  console.log("Fibonacci Dizisi:", stringResult);
}
