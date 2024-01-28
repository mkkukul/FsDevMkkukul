// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

//? Ornek: 1 den n kadar sayiları toplayan kodu yaziniz.
// Kullanıcıdan bir sayı al
const n = Number(prompt("Bir Sayı Giriniz"));

// Toplam değişkenini sıfırla
let toplam = 0;

// 1'den n'e kadar olan sayıları topla
for (let i = 1; i <= n; i++) {
    // Toplama i'yi ekle
    toplam += i;

    // Her adımda toplam ve i'yi konsola yazdır (opsiyonel, debug amaçlı)
    console.log(toplam, i);
}

// Toplam sonucunu konsola yazdır
console.log("SONUC", toplam);

//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

// 1 ile 100 arasında rastgele sayıları oluştur ve konsola yazdır
for (let i = 1; i <= 10; i++) {
  // Math.random() 0 ile 1 arasında rastgele bir sayı üretir
  // Math.random() * 100 ile 0 ile 100 arasında bir sayı üretir
  // Math.round() ile virgülden sonraki kısmı almadan en yakın tam sayıya yuvarlar
  const rasgele = Math.round(Math.random() * 100);

  // Oluşturulan rastgele sayıyı konsola yazdır
  console.log(rasgele);
}





//* Math.floor() =>en yakin alt tamsayiya yuvarlar kusarı siler 
//* Math.ceil() =>en yakin ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.














