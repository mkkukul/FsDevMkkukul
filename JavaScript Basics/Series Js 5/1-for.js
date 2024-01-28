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






//* Math.floor() =>en yakin alt tamsayiya yuvarlar kusarı siler 
//* Math.ceil() =>en yakin ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

const sayi = Number(prompt(" Pozitif Bir Sayi Giriniz"))
let asal = true;
if(sayi <= 1 ) {
    alert("Sayi 1'den buyuk olmalidir");
}else{
    for(let i=2; i<sayi;i++){
      if(sayi % i === 0){
        asal=false;
        break;
      }  
    }
const sonuc = asal === true ? "ASAL": "ASAL DEGILDIR";
console.log(`${sayi} ${sonuc}`)  
}