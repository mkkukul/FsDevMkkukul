// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

//* ORNEK:
//***************************************************/
// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

//! Cannot access 'tekCift1' before initialization  at
// console.log(tekCift1(9));

//! Funct Expression yontemi ile tanimlama
const tekCift1 = function (sayi) {
    return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
}

console.log(tekCift1(5));
//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/
const buyukBul = function(n1,n2,n3){
    if (n1 >= n2 && n1 >= n3) {
        enBuyuk = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        enBuyuk = n2;
    } else if (n3 >= n1 && n3 >= n2) {
        enBuyuk = n3;
    }
    return enBuyuk 


}
const n1 = +prompt("Sayi1:");
const n2 = +prompt("Sayi2:");
const n3 = +prompt("Sayi3:");
console.log("Girilen sayilarin en buyugu:", buyukBul (n1,n2,n3));
//* 1.Yontem
// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en buyuk sayidir`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en buyuk sayidir`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} en buyuk sayidir`);
// }






// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log(Number.MIN_VALUE);
// console.log("Girilen sayilarin en buyugu:", buyukBul(n1, n2, n3));



//* ORNEK: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//**************************************************/
