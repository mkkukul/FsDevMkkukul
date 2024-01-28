 // * ====================================
// *                  KARAR YAPILARI
// * ====================================

//**************** IF-ELSE **************

console.log("****** CONDITIONS *******");
//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// Kullanıcıdan bir sayı al
const sayi = prompt("Bir sayı giriniz:");

// Girilen sayının pozitif, negatif veya sıfır olduğunu kontrol et
if (sayi > 0) {
    console.log(`${sayi} pozitiftir.`);
} else if (sayi == 0) {
    console.log(`${sayi} 0'a eşittir.`);
} else {
    console.log(`${sayi} negatiftir.`);
}

// Girilen sayının değerini ve türünü konsola yazdır
console.log(sayi, typeof sayi);

// ? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu yazdırınız

