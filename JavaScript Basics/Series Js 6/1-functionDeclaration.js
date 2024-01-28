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
// Değişken tanımlama (şu an kullanılmıyor, yorum satırı içinde)
// let x;

// Boş bir console.log() çağrısı (şu an kullanılmıyor, yorum satırı içinde)
// console.log();

// Selamlama fonksiyonu tanımlama
function selamla(ad, soyAd = "") {
    // Fonksiyon içindeki ad ve soyAd değişkenleri
    // şu an için kullanılmadığı için yorum satırına alındı.
    // let ad = 'merhaba'

    // Konsola selamlama mesajını yazdır
    console.log(`Merhaba ${ad} ${soyAd}`);
}

// Fonksiyonu çağırma
selamla("Can", "Yılmaz");  // "Merhaba Can Yılmaz"
selamla("Canan", "Öztürk"); // "Merhaba Canan Öztürk"
selamla("Ayşe"); // "Merhaba Ayşe"









//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//***************************************************/



// Yaş hesaplamak için bir fonksiyon tanımla
function yasHesapla(isim, dogumTarihi) {
    // Birinci yöntem: Doğrudan yaş hesaplama
    // const sonuc = `${isim}in yaşı ${2023 - dogumTarihi} dir.`;

    // İkinci yöntem: Yılın güncel değerini alarak yaş hesaplama
    // const sonuc = `${isim}in yaşı ${new Date().getFullYear() - dogumTarihi} dir.`;

    // Sonucu direk return et (farklı yöntemleri yorum satırlarına alarak istediğin yöntemi seçebilirsin)
    return `${isim}'in yaşı ${new Date().getFullYear() - dogumTarihi}dir.`;
}

// Fonksiyonu kullanarak yaş hesapla ve sonucu mesaj1'e atla
const mesaj1 = yasHesapla("Elif Can", 1990);

// Mesajı konsola yazdır
console.log(mesaj1);

// Doğrudan fonksiyonu çağırarak mesajı konsola yazdır
console.log(yasHesapla("Veli Canan", 1980));









//* ORNEK4:
//*****************************************************/
// Tek mi çift mi kontrol eden fonksiyon
function tekCift(sayi) {
    // Ternary operatör kullanarak, sayının tek veya çift olma durumunu belirle
    return sayi % 2 ? `${sayi} "TEKTIR"` : `${sayi} "CIFTTIR"`; 
}

// Fonksiyonu kullanarak örnekler
console.log(tekCift(5)); // 5 "TEKTIR"
console.log(tekCift(2)); // 2 "CIFTTIR"

// Kullanıcıdan sayı al
const sayi = +prompt("Bir Sayı Giriniz");

// Alınan sayıyı fonksiyon kullanarak kontrol et ve sonucu yazdır
console.log(tekCift(sayi));


