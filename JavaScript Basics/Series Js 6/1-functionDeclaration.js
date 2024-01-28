// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNC DECLARATION ******");

//* ORNEK:
//************************************************/

//! Fonksiyonun tanimlanmasi (declaration)

// Fonksiyon tanımlama
function yazdir() {
    console.log("merhaba");
}

// Fonksiyon çağırma
yazdir(); // "merhaba"
yazdir(); // "merhaba"
yazdir(); // "merhaba"












//* ORNEK2:
//*************************************************/









//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//***************************************************/

function yasHesapla(isim,dogumTarihi){
    
    // const sonuc = `${isim}in yasi ${2023 - dogumTarihi} dir.`;
    // const sonuc = `${isim}in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
    // return sonuc;
    return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi}dir.`;
}
const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Veli Canan", 1980))

//* ORNEK4:
//*****************************************************/
function tekCift(sayi){
    return sayi % 2 ? `${sayi} "TEKTIR"` : `${sayi} "CIFTTIR"`; 
    
}
console.log(tekCift(5));
console.log(tekCift(2));

const sayi = +prompt("Bir Sayi Giriniz");
console.log(tekCift(sayi));














//* ORNEK4:
//*****************************************************/







//* ORNEK4:
//*****************************************************/


