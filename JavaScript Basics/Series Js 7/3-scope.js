// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
console.log("******* 3 - SCOPE ********");

let sayi1 = 5; // Global Scope'ta bir değişken tanımlanıyor.
console.log(sayi1); // 5

const fonks1 = function () {
  sayi1 = 22; // Global değişkeni değiştiriyor.
  console.log(sayi1); // 22
};

fonks1(); // Fonksiyon çağrıldığında sayi1 22'ye güncellenir.

console.log(++sayi1); // 23
console.log(sayi1); // 23

// --------------------------

const sayi2 = 7; // Global Scope'ta başka bir değişken tanımlanıyor.
console.log(sayi2); // 7

const fonks2 = () => {
  const sayi2 = 11; // Fonksiyon içinde yeni bir sayi2 değişkeni tanımlanıyor (Function Scope).
  console.log(sayi2); // 11
};

fonks2(); // Fonksiyon çağrıldığında içerideki sayi2 kullanılır, global sayi2 etkilenmez.
console.log(sayi2); // 7

if (sayi2 === 8) {
  let sonuc = "Merhaba"; // 'let' ile tanımlanan değişken, blok içinde tanımlandığı yerle sınırlıdır (Block Scope).
} else {
  sonuc = "Nasilsin"; // 'let' ile tanımlanmamış değişken hoisting özelliği nedeniyle globalde var gibi kabul edilir.
  // console.log(sonuc);
}

console.log(sonuc); // 'Nasilsin' olarak çıktı alınır.
