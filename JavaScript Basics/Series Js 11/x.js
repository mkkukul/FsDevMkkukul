//! 3 farklı yöntem ile Object oluşturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const arabalar = new Object();
// 'Object()' sınıfından bir nesne oluşturuyoruz ve 'arabalar' adında bir değişkene atıyoruz.

arabalar.marka = "BMW";
// 'arabalar' nesnesine "marka" adında bir özellik (property) ekliyoruz ve değerini "BMW" olarak atıyoruz.

arabalar.motor = "1.3";
// Aynı şekilde, 'arabalar' nesnesine "motor" adında bir özellik ekliyoruz ve değerini "1.3" olarak atıyoruz.

arabalar.model = 2022;
// 'arabalar' nesnesine "model" adında bir özellik ekliyoruz ve değerini 2022 olarak atıyoruz.

arabalar.lpg = true;
// 'arabalar' nesnesine "lpg" adında bir özellik ekliyoruz ve değerini 'true' olarak atıyoruz.

console.log(arabalar);
// 'arabalar' nesnesini konsola yazdırıyoruz.

//!Read
// Nesnenin özelliklerine erişme:
console.log(arabalar.lpg); 
// 'arabalar' nesnesinin "lpg" özelliğine "." notasyonu ile erişiyoruz.

console.log("MODEL:", arabalar["model"]); 
// 'arabalar' nesnesinin "model" özelliğine köşeli parantez notasyonu ile erişiyoruz.

// //? Square bracket yönteminin en büyük avantajı key değerini
// //? değişken olarak kullanabilmemizdir.
// const key = "mark";
// console.log(arabalar[key]);
// Köşeli parantez notasyonu, dinamik bir anahtar (key) kullanmamıza olanak tanır. Bu örnekte, 'key' değişkenini kullanarak 'arabalar' nesnesinin "marka" özelliğine erişebiliriz.

// arabalar.motor = "1.6";
// 'arabalar' nesnesinin "motor" özelliğini güncelliyoruz ve değerini "1.6" olarak değiştiriyoruz.

// console.log(arabalar);
// 'arabalar' nesnesini güncellenmiş haliyle konsola yazdırıyoruz.

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

// 'Personel' adında bir constructor (kurucu) fonksiyon tanımlıyoruz.
function Personel(id, ad, maas) {
  this.id = id;       // 'Personel' nesnesine bir 'id' özelliği (property) ekliyoruz.
  this.ad = ad;       // 'Personel' nesnesine bir 'ad' özelliği ekliyoruz.
  this.maas = maas;   // 'Personel' nesnesine bir 'maas' özelliği ekliyoruz.
  
  // console.log(this); // 'this' kelimesi, tanımlandığı constructor fonksiyonuna referans verir.
}

// 'kisi1' adında yeni bir 'Personel' nesnesi oluşturuyoruz.
const kisi1 = new Personel("1234567890", "Mustafa", 15000);

// 'kisi2' adında başka bir 'Personel' nesnesi oluşturuyoruz.
const kisi2 = new Personel("177567890", "Canan", 25000);

// Oluşturduğumuz 'kisi1' ve 'kisi2' nesnelerinin özelliklerine erişiyoruz.
console.log(kisi1.ad);     // 'kisi1' nesnesinin "ad" özelliğine erişiyoruz ve konsola yazdırıyoruz.
console.log(kisi2.maas);   // 'kisi2' nesnesinin "maas" özelliğine erişiyoruz ve konsola yazdırıyoruz.
console.log(kisi2["id"]);  // 'kisi2' nesnesinin "id" özelliğine köşeli parantez notasyonu ile erişiyoruz.

// JavaScript'te 'this' kelimesi, bulunduğu bağlamın (context) referansını verir. 
// Bu örnekte global alanda olduğu için 'this', 'window' objesini gösterir.
console.log(this); 

// Tarayıcıda bir uyarı penceresi oluşturarak "Merhaba" mesajını gösteriyoruz.
window.alert("Merhaba");

//* ---------------------------------------------------------
//* 3- Object literal (En çok tercih edilen yöntem)
//* ---------------------------------------------------------

// 'worker' adında bir nesne oluşturuyoruz ve çeşitli özelliklerini tanımlıyoruz.
const worker = {
  name: "Can",                              // İsim özelliği
  surname: "Canan",                         // Soyisim özelliği
  age: 33,                                  // Yaş özelliği
  job: "developer",                         // Meslek özelliği
  languages: ["C++", "Java", "Javascript"], // Dil bilgileri (dizi olarak)
  salary: 140000                            // Maaş özelliği
};

// 'worker' nesnesini konsola yazdırıyoruz.
console.log(worker);

// 'worker' nesnesinin "job" özelliğini konsola yazdırıyoruz.
console.log("JOB:", worker.job);

// 'worker' nesnesinin "languages" özelliğine farklı erişim yöntemleri ile konsola yazdırıyoruz.
console.log("Lang:", worker["languages"]);

// 'worker' nesnesinin "languages" dizisindeki 2. indeksteki dil bilgisini konsola yazdırıyoruz.
console.log(worker.languages[2]);

// 'worker' nesnesinin "languages" dizisindeki her bir dil bilgisini döngü ile konsola yazdırıyoruz.
worker["languages"].forEach((l) => console.log(l));

// 'worker' nesnesine yeni özellikler ekliyoruz: "dob" (doğum yılı) ve "email".
worker.dob = "1990";
worker.email = "can@gmail.com";

// 'worker' nesnesinin "salary" özelliğini %10 artırıyoruz ve sonucunu konsola yazdırıyoruz.
worker["salary"] *= 1.1;
console.log(worker);

//* Nesne Kopyalama (Shallow Copy)
// 'worker' nesnesini 'person' adında başka bir değişkene atayarak kopyalıyoruz (sığ kopya).
const person = worker; 
console.log("PERSON:", person);

// 'person' nesnesinin "dob" özelliğini güncelliyoruz ve sonucunu konsola yazdırıyoruz.
person.dob = 2000;
console.log("PERSON:", person);

//* Nesne Kopyalama (Deep Copy)
// 'worker' nesnesini tamamen kopyalayarak derin bir kopya oluşturuyoruz.
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));

// 'deepCopyOfWorker' nesnesinin "dob" özelliğini güncelliyoruz ve sonucunu konsola yazdırıyoruz.
deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

