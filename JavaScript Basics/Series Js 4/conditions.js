 // * ====================================
// *                  KARAR YAPILARI
// * ====================================

//**************** IF-ELSE **************

console.log("****** CONDITIONS *******");
//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//! yada 0 oldugunu tespit ederek yazdiriniz.

//! Kullanıcıdan bir sayı al
const sayi = prompt("Bir sayı giriniz:");

//! Girilen sayının pozitif, negatif veya sıfır olduğunu kontrol et
if (sayi > 0) {
    console.log(`${sayi} pozitiftir.`);
} else if (sayi == 0) {
    console.log(`${sayi} 0'a eşittir.`);
} else {
    console.log(`${sayi} negatiftir.`);
}

//! Girilen sayının değerini ve türünü konsola yazdır
console.log(sayi, typeof sayi);

// ? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu yazdırınız

//! Kullanıcıdan üç sayı al
const n1 = +prompt("Sayı 1:");
const n2 = +prompt("Sayı 2:");
const n3 = +prompt("Sayı 3:");

//! 1. Yöntem: Her bir sayıyı kontrol et ve en büyük olanı bul
if (n1 >= n2 && n1 >= n3) {
    console.log(`${n1} en büyük sayıdır`);
} else if (n2 >= n1 && n2 >= n3) {
    console.log(`${n2} en büyük sayıdır`);
} else if (n3 >= n1 && n3 >= n2) {
    console.log(`${n3} en büyük sayıdır`);
}

//! 2. Yöntem: En büyük sayıyı bir değişkende tut
let enBuyuk = n1;
if (n2 >= enBuyuk) {
    enBuyuk = n2;
}
if (n3 >= enBuyuk) {
    enBuyuk = n3;
}
console.log(`${enBuyuk} en büyüktür`);

//! Kullanıcıdan bir not al
const not = +prompt("Not Giriniz");

//! Ternary operatörü kullanarak geçme veya kalma durumunu kontrol et
let sonuc = not >= 50 ? "Geçti" : "Kaldı";
console.log(sonuc);
console.log(not >= 50 ? "Geçti" : "Kaldı");

//! Ternary operatörü kullanarak askerlik durumunu kontrol et
const yas = 17;
const cinsiyet = "erkek";
const saglikli = true;

yas >= 18 && cinsiyet === "erkek" && saglikli
  ? console.log("Askerlik yapmalı")
  : console.log("Askerlik yapmasına gerek yok");
