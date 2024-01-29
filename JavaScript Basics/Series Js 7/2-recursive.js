// ? =================================================
// ?           FONKSİYONLAR - RECURSIVE
// ? ================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
//* Özellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alınabilir.

//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamini
//* hesaplayarak yazdiran fonksiyonu recursive olarak kodlayiniz.

console.log("****** 2 - RECURSION ********");

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
//! f(n) = f(n-1) + f(n-2)

// Fibonacci dizisini hesaplayan rekürsif fonksiyon
const fibo = (n) => {
  // Eğer n 0'dan küçükse veya eşitse, 0'ı döndür
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    // Eğer n 1 veya 2 ise, 1'i döndür
    return 1;
  } else {
    // Diğer durumlarda rekürsif olarak devam et
    return fibo(n - 1) + fibo(n - 2);
  }
};

// Kullanıcıdan n sayısını al
const n = +prompt("n terimini giriniz:");

// Eğer n 0'dan küçükse, uyarı mesajı ver
if (n <= 0) {
  console.log("Lütfen 0'dan büyük bir sayı giriniz.");
} else {
  // Fibonacci dizisinin n. terimini konsola yazdır
  console.log(`FIBO(${n}) = ${fibo(n)}`);
}




























// 