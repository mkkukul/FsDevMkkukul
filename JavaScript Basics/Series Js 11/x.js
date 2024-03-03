//! 3 farklı yöntem ile Object oluşturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const arabalar = new Object();
//! 'Object()' sınıfından bir nesne oluşturuyoruz ve 'arabalar' adında bir değişkene atıyoruz.

arabalar.marka = "BMW";
//! 'arabalar' nesnesine "marka" adında bir özellik (property) ekliyoruz ve değerini "BMW" olarak atıyoruz.

arabalar.motor = "1.3";
//! Aynı şekilde, 'arabalar' nesnesine "motor" adında bir özellik ekliyoruz ve değerini "1.3" olarak atıyoruz.

arabalar.model = 2022;
//! 'arabalar' nesnesine "model" adında bir özellik ekliyoruz ve değerini 2022 olarak atıyoruz.

arabalar.lpg = true;
//! 'arabalar' nesnesine "lpg" adında bir özellik ekliyoruz ve değerini 'true' olarak atıyoruz.

console.log(arabalar);
//! 'arabalar' nesnesini konsola yazdırıyoruz.

//!Read
//! Nesnenin özelliklerine erişme:
console.log(arabalar.lpg); 
//! 'arabalar' nesnesinin "lpg" özelliğine "." notasyonu ile erişiyoruz.

console.log("MODEL:", arabalar["model"]); 
//! 'arabalar' nesnesinin "model" özelliğine köşeli parantez notasyonu ile erişiyoruz.

// //? Square bracket yönteminin en büyük avantajı key değerini
// //? değişken olarak kullanabilmemizdir.
// const key = "mark";
// console.log(arabalar[key]);
//! Köşeli parantez notasyonu, dinamik bir anahtar (key) kullanmamıza olanak tanır. Bu örnekte, 'key' değişkenini kullanarak 'arabalar' nesnesinin "marka" özelliğine erişebiliriz.

// arabalar.motor = "1.6";
// 'arabalar' nesnesinin "motor" özelliğini güncelliyoruz ve değerini "1.6" olarak değiştiriyoruz.

// console.log(arabalar);
//! 'arabalar' nesnesini güncellenmiş haliyle konsola yazdırıyoruz.

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//! 'Personel' adında bir constructor (kurucu) fonksiyon tanımlıyoruz.
function Personel(id, ad, maas) {
  this.id = id;       // 'Personel' nesnesine bir 'id' özelliği (property) ekliyoruz.
  this.ad = ad;       // 'Personel' nesnesine bir 'ad' özelliği ekliyoruz.
  this.maas = maas;   // 'Personel' nesnesine bir 'maas' özelliği ekliyoruz.
  
  // console.log(this); // 'this' kelimesi, tanımlandığı constructor fonksiyonuna referans verir.
}

//! 'kisi1' adında yeni bir 'Personel' nesnesi oluşturuyoruz.
const kisi1 = new Personel("1234567890", "Mustafa", 15000);

//! 'kisi2' adında başka bir 'Personel' nesnesi oluşturuyoruz.
const kisi2 = new Personel("177567890", "Canan", 25000);

//! Oluşturduğumuz 'kisi1' ve 'kisi2' nesnelerinin özelliklerine erişiyoruz.
console.log(kisi1.ad);     // 'kisi1' nesnesinin "ad" özelliğine erişiyoruz ve konsola yazdırıyoruz.
console.log(kisi2.maas);   // 'kisi2' nesnesinin "maas" özelliğine erişiyoruz ve konsola yazdırıyoruz.
console.log(kisi2["id"]);  // 'kisi2' nesnesinin "id" özelliğine köşeli parantez notasyonu ile erişiyoruz.

//!JavaScript'te 'this' kelimesi, bulunduğu bağlamın (context) referansını verir. 
//! Bu örnekte global alanda olduğu için 'this', 'window' objesini gösterir.
console.log(this); 

//! Tarayıcıda bir uyarı penceresi oluşturarak "Merhaba" mesajını gösteriyoruz.
window.alert("Merhaba");

//* ---------------------------------------------------------
//* 3- Object literal (En çok tercih edilen yöntem)
//* ---------------------------------------------------------

//! 'worker' adında bir nesne oluşturuyoruz ve çeşitli özelliklerini tanımlıyoruz.
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

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================

// 'people' adında bir nesne oluşturuyoruz. Bu nesne, içerisinde farklı kişilere ait bilgileri barındıran iç içe nesneleri içerir.
const people = {
  person1: {
    name: "Can",                      // İsim özelliği
    surname: "Canan",                 // Soyisim özelliği
    dob: "1990",                      // Doğum yılı özelliği
    job: "developer",                 // Meslek özelliği
    salary: "140000",                 // Maaş özelliği
    drivingLicense: true              // Ehliyet bilgisi özelliği
  },
  person2: {
    name: "John",                     // İsim özelliği
    surname: "Sweet",                 // Soyisim özelliği
    dob: "1990",                      // Doğum yılı özelliği
    job: "tester",                    // Meslek özelliği
    salary: "110000",                 // Maaş özelliği
    drivingLicense: false             // Ehliyet bilgisi özelliği
  },
  person3: {
    name: "Steve",                    // İsim özelliği
    surname: "Job",                   // Soyisim özelliği
    dob: "2000",                      // Doğum yılı özelliği
    job: "developer",                 // Meslek özelliği
    salary: "90000",                  // Maaş özelliği
    drivingLicense: true              // Ehliyet bilgisi özelliği
  }
};

// 'people' nesnesini konsola yazdırıyoruz.
console.log(people); // Nesnenin tamamını gösterir

// 'people' nesnesinin 'person2' özelliğinin 'salary' özelliğini konsola yazdırıyoruz.
console.log("Salary of P2:", people.person2.salary); // 'person2' adlı kişinin maaşını gösterir

//? JavaScript'te, nesneler (objects) doğrudan iterable (yineleyici) olarak kabul edilmezler. 
//? Ancak, 'for...in' ve 'for...of' döngüleri ile üzerlerinde yineleme yapabiliriz.

// Nesne üzerindeki key'leri (anahtarları) bir dizi olarak döndüren 'Object.keys()' metodunu kullanıyoruz.
console.log(Object.keys(people)); 
// Örnek çıktı: ["person1", "person2", "person3"] - 'people' nesnesinin anahtarlarından oluşan bir dizi döner.

// Nesne üzerindeki value'ları (değerleri) bir dizi olarak döndüren 'Object.values()' metodunu kullanıyoruz.
console.log(Object.values(people)); 
// Örnek çıktı: [{name: "Can", surname: "Canan", ...}, {name: "John", surname: "Sweet", ...}, ...] 
// - 'people' nesnesinin değerlerini içeren bir dizi döner.

// Nesne üzerindeki her bir anahtar-değer çiftini bir dizi içinde döndüren 'Object.entries()' metodunu kullanıyoruz.
console.log(Object.entries(people)); 
// Örnek çıktı: 
// [["person1", {name: "Can", surname: "Canan", ...}], 
// ["person2", {name: "John", surname: "Sweet", ...}], 
// ["person3", {name: "Steve", surname: "Job", ...}]]
// - 'people' nesnesinin anahtar-değer çiftlerini içeren bir dizi döner.
//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

// 'for...in' döngüsü ile 'people' nesnesinin her bir anahtarını (key) elde ediyoruz.
for (let person in people) {
  // Her bir anahtarı (key) konsola yazdırıyoruz.
  console.log(person); 
  // 'people' nesnesi üzerindeki bu anahtara (key) karşılık gelen değeri konsola yazdırıyoruz.
  console.log(people[person]); 
}

// Örneğin, 'person1', 'person2', 'person3' gibi anahtarları konsola yazdırırken, 
// bu anahtarların karşılık gelen değerleri olan objeleri de ayrı ayrı konsola yazdırıyoruz.
//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

console.log("****************");

// 'Object.keys(people)' ifadesi, 'people' nesnesinin anahtarlarını (keys) bir dizi olarak döndürür.
// Bu döngüde, 'for...of' ile bu anahtarları tek tek dolaşıyoruz ve her birini konsola yazdırıyoruz.
for (let key of Object.keys(people)) {
  console.log(key);
}

console.log("****************");

// 'Object.values(people)' ifadesi, 'people' nesnesinin değerlerini (values) bir dizi olarak döndürür.
// Bu döngüde, 'for...of' ile bu değerleri tek tek dolaşıyoruz ve her birinin 'salary' özelliğini konsola yazdırıyoruz.
for (let v of Object.values(people)) {
  // Her bir 'v' değerinin içerisindeki 'salary' özelliğini konsola yazdırıyoruz.
  console.log(v.salary);
  // Alternatif olarak aynı sonucu elde etmek için bu satırı da kullanabiliriz.
  // console.log(v["salary"]);
}

// Bu döngüler, 'Object.keys()' ve 'Object.values()' metotları sayesinde nesnenin anahtarlarına ve değerlerine erişim sağlar.
//? people objesindeki tum salary 'leri yazdir

// 'Object.entries(people)' ifadesi, 'people' nesnesinin anahtar-değer çiftlerini bir dizi olarak döndürür.
// Her bir anahtar-değer çifti, bir dizi içerisinde iki eleman olarak döner: [anahtar, değer].
// Bu döngüde, 'for...of' ile bu anahtar-değer çiftlerini tek tek dolaşıyoruz.
for (let [k, v] of Object.entries(people)) {
  // Her bir döngü iterasyonunda, anahtarı ve 'salary' özelliğini içeren değeri konsola yazdırıyoruz.
  // Burada, template literal (şablon dizgesi) kullanarak hem anahtarı hem de salary değerini konsola yazdırıyoruz.
  console.log(`${k} - ${v.salary}`);
}

// Bu döngü, 'Object.entries()' metodu sayesinde nesnenin her bir anahtarına ve bu anahtara ait değere erişim sağlar.
//? ARRAY METOTLARI ILE

// 'Object.keys(people)' ifadesi, 'people' nesnesinin anahtarlarını bir dizi olarak döndürür.
// 'forEach' metodu ile bu anahtarları dolaşıyoruz ve her bir anahtarı konsola yazdırıyoruz.
console.log("********");
Object.keys(people).forEach((p) => console.log(p));

// Bu çıktı, 'people' nesnesinin anahtarlarından oluşan bir diziyi konsola yazdıracaktır.

console.log("********");

// 'Object.values(people)' ifadesi, 'people' nesnesinin değerlerini bir dizi olarak döndürür.
// 'forEach' metodu ile bu değerleri dolaşıyoruz ve her bir değerin 'surname' özelliğini konsola yazdırıyoruz.
Object.values(people).forEach((p) => console.log(p.surname));

// Bu çıktı, 'people' nesnesinin her bir değerinin 'surname' özelliğini konsola yazdıracaktır.


//? job = developer olanlarin dob degelerini yazdiriniz.

// 'Object.values(people)' ifadesi, 'people' nesnesinin tüm değerlerini bir dizi olarak döndürür.
// 'filter' metodu ile bu değerler arasında bir filtreleme yapılır.
// Filtreleme kriteri, kişinin 'job' özelliğinin "developer" olmasıdır.
// Sonuç olarak, bu koşulu sağlayan kişilerin listesi alınır.

console.log("*** DOB ****");

// Sonuç olarak dönen kişilerin listesi, 'forEach' ile dolaşılır.
// Her bir kişinin 'dob' özelliği konsola yazdırılır.
Object.values(people)
  .filter((p) => p.job === "developer")  // Filtreleme: job = "developer"
  .forEach((p) => console.log(p.dob));   // Her bir kişinin dob özelliği konsola yazdırılır.

// Bu çıktı, "developer" olarak belirtilen işteki kişilerin doğum tarihlerini konsola yazdıracaktır.

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************

// 'team' adında bir dizi oluşturuldu. Bu dizi, farklı kişilere ait bilgileri JSON formatında içerir.
// Her bir öğe (obje) içerisinde isim, soyisim, iş ve yaş gibi bilgiler bulunmaktadır.
const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]; 
//* JSON

// 'console.log(team);' ifadesi, 'team' dizisindeki tüm öğeleri konsola yazdırır.
// Bu, tüm takım üyelerinin bilgilerini gösterir.
console.log(team);

// 'console.log(team[2]);' ifadesi, 'team' dizisinin 2. indeksindeki öğeyi (objeyi) konsola yazdırır.
// Bu, dizinin 2. indeksindeki (üçüncü sıradaki) kişi olan "Hazel Nut" bilgilerini gösterir.
console.log(team[2]);

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
// 'team.forEach((person) => console.log(person.job));' ifadesi, 'team' dizisindeki her bir kişinin 'job' özelliğini konsola yazdırmak için kullanılır.
team.forEach((person) => console.log(person.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
// 'team.map((p) => p.age + 1);' ifadesi, 'team' dizisindeki her bir kişinin yaşını 1 artırarak yeni bir dizi oluşturur.
const ages = team.map((p) => p.age + 1);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// 'teamFullName' adında bir dizi oluşturulmuştur. Her bir öğe için, isim ve soyisim birleştirilip büyük harfe çevrilir.
// Aynı zamanda yaş değeri 5 artırılarak 'age' adında yeni bir özellik eklenir.
const teamFullName = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

//? Alternatif bir yaklaşım kullanılarak, 'team' dizisindeki her bir öğe için yeni bir nesne oluşturulur.
// 'teamFullName' adında bir dizi oluşturulmuştur.
const teamFullName = team.map((p) => {
  // Her bir kişinin adı ve soyadı büyük harfe çevrilir, ardından birleştirilip 'fullName' adında bir özellik olarak atanır.
  // Aynı zamanda yaş değeri 5 artırılarak 'age' adında yeni bir özellik eklenir.
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});

// Oluşturulan 'teamFullName' dizisi konsola yazdırılır.
console.log(teamFullName);
//? 'team' dizisindeki kişiler filtrelenir. Yaşı 22 veya daha küçük olan kişiler bu filtreleme sonucunda elde edilir.
// Bu kişilerin adları daha sonra bir liste olarak konsola yazdırılır.
team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

//? 'team' dizisindeki kişiler filtrelenir. Yaşı 22 veya daha küçük olan kişiler bu filtreleme sonucunda elde edilir.
// Daha sonra, bu filtrelenmiş kişilerin sadece isimleri 'map' metoduyla yeni bir diziye aktarılır.
const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);

//? Elde edilen yeni dizideki kişilerin isimleri 'teamUnder22' adlı değişkene atanır ve konsola yazdırılır.
console.log(teamUnder22);

//? 'team' dizisindeki kişilerin yaş ortalamasını hesaplamak için 'reduce' metodu kullanılır.
// 'reduce' metodu, bir dizi üzerinde döngüye girer ve her bir eleman için belirtilen işlemi gerçekleştirir.
// İlk parametre olarak toplam (sum) ve kişi (person) alınır. İkinci parametre olarak başlangıç değeri 0 verilir.
// Her bir kişi için yaş değeri toplama eklenir.
const avgAges =
  team.reduce((sum, person) => (sum += person.age), 0) / team.length;

//? Hesaplanan yaş ortalaması 'avgAges' değişkenine atanır ve konsola yazdırılır.
console.log(avgAges);
