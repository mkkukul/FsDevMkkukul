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

// Kullanıcıdan pozitif bir sayı al
const sayi = Number(prompt("Pozitif Bir Sayı Giriniz"));

// Asal sayı kontrolü için bir bayrak değişkeni tanımla
let asal = true;

// Girilen sayı 1'den küçük veya eşitse uyarı ver
if (sayi <= 1) {
    alert("Sayı 1'den büyük olmalıdır");
} else {
    // Girilen sayı 2'den başlayarak kendisinden bir önceki sayıya kadar olan sayılara bölünür
    for (let i = 2; i < sayi; i++) {
        // Eğer sayı i'ye tam bölünüyorsa, asal değildir ve döngüden çık
        if (sayi % i === 0) {
            asal = false;
            break;
        }
    }

    // Asal değişkenine göre sonuç belirle
    const sonuc = asal === true ? "ASAL" : "ASAL DEĞİLDİR";

    // Sonucu konsola yazdır
    console.log(`${sayi} ${sonuc}`);
}













