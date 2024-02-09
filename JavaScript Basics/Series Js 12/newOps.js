//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

// 1. YÖNTEM (Klasik)
// Nesne özelliklerine erişim
const name1 = car.name;
const model1 = car["model"];

// 2. YÖNTEM: YAPI PARÇALAMA (DESTRUCTURING)
// Nesne özelliklerine erişim ve yeni değişkenlere atama
const { name: carName, colors, model, engine } = car;
console.log(carName, model, engine, colors);

//! Bu kod parçasında, bir araba nesnesi tanımlanır ve bu nesneye iki farklı yöntemle erişim sağlanır:
 
//! Klasik Yöntem: Özelliklere erişim noktasında nokta notasyonu (car.name) veya köşeli parantez notasyonu (car["model"]) kullanılır. Bu yöntem daha gelenekseldir.

//!  Yapı Parçalama (Destructuring): Nesne özellikleri, {} içerisinde kullanılarak aynı isimle veya farklı bir isimle yeni değişkenlere atanabilir. const { name: carName, colors, model, engine } = car; satırında, name özelliği carName değişkenine atanırken, colors, model ve engine özellikleri doğrudan aynı isimle yeni değişkenlere atanır. Bu yöntem daha modern ve kısa bir yazım şeklidir.
 
// const car = {
  // name: "BMW",
  // model: 1990,
  // engine: 1.6,
  // colors: ["blue", "purple"],
// };
// 
// * 1.YONTEM (Classical)
// const name1 = car.name;
// const model1 = car["model"];
// 
// * 2.YONTEM: DESTRUCTURING
// 
// const { name: carName, colors, model, engine } = car;
// console.log(carName, model, engine, colors);
// 
//* EXAMPLE: NESTED

// Araba bilgilerini içeren bir nesne oluşturuldu
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

// cars nesnesinden car1 ve car2 özelliklerini ayrıştırarak yeni değişkenlere atama
const { car1, car2 } = cars;
console.log(car1);

// Her bir araba için isim ve model özellikleri ayrıştırılarak yeni değişkenlere atanıyor
const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;

// Arabaların isimleri console'a yazdırılıyor
console.log(c1Name, c2Name);

//! Bu kod parçası bir araba bilgisini içeren nesnelerin bir koleksiyonunu temsil ediyor. cars adında bir nesne tanımlanıyor ve içine car1 ve car2 adında iki alt nesne yerleştiriliyor. Her alt nesne, bir araba modelinin özelliklerini içerir: isim, model yılı ve motor bilgisi gibi.

//!  Daha sonra, const { car1, car2 } = cars; satırıyla cars nesnesinin car1 ve car2 özellikleri ayrıştırılarak yeni değişkenlere atanıyor. Bu sayede, her bir araba bilgisine ayrı ayrı erişim sağlanıyor.
 
//! Sonraki adımda, const { name: c1Name, model: c1Model } = car1; ve const { name: c2Name, model: c2Model } = car2; satırlarıyla her arabanın isim ve model özellikleri ayrıştırılarak c1Name, c1Model, c2Name ve c2Model gibi değişkenlere atanıyor. Böylelikle, bu değişkenler üzerinden arabaların isimleri ve modellerine erişim sağlanabiliyor.
 
//! Son olarak, bu değişkenler kullanılarak arabaların isimleri console'a yazdırılıyor.

// const cars = {
  // car1: {
    // name: "BMW",
    // model: 1990,
    // engine: 1.6,
  // },
  // car2: {
    // name: "Mercedes",
    // model: 2022,
    // engine: 2.0,
  // },
// };
// 
// const { car1, car2 } = cars;
// console.log(car1);
// 
// const { name: c1Name, model: c1Model } = car1;
// const { name: c2Name, model: c2Model } = car2;
// 
// console.log(c1Name, c2Name);
//********************************************** */
//* Example

// Ekip üyelerini içeren bir dizi oluşturuluyor
const team = [
  {
    name: "Josh", // İsim: Josh
    surname: "Barry", // Soyisim: Barry
    job: "developer", // İş: developer
    age: 30, // Yaş: 30
  },
  {
    name: "Josh", // İsim: Josh
    surname: "Barry", // Soyisim: Barry
    job: "tester", // İş: tester
    age: 45, // Yaş: 45
  },
  {
    name: "Hazel", // İsim: Hazel
    surname: "Nut", // Soyisim: Nut
    job: "team lead", // İş: team lead
    age: 40, // Yaş: 40
  },
];


// const team = [
  // {
    // name: "Josh",
    // surname: "Barry",
    // job: "developer",
    // age: 30,
  // },
  // {
    // name: "Josh",
    // surname: "Barry",
    // job: "tester",
    // age: 45,
  // },
  // {
    // name: "Hazel",
    // surname: "Nut",
    // job: "team lead",
    // age: 40,
  // },
// ];
//* Classical

team.forEach((p) => { // `team` dizisinin her bir öğesi için bir forEach döngüsü başlatılıyor
  console.log("****************"); // Her bir ekip üyesinin bilgileri arasına ayırmak için bir ayırıcı çizgi yazdırılıyor
  console.log("Name:", p.name); // Her bir ekip üyesinin adı (`name` özelliği) ekrana yazdırılıyor
  console.log("Surname:", p.surname); // Her bir ekip üyesinin soyadı (`surname` özelliği) ekrana yazdırılıyor
  console.log("Job:", p["job"]); // Her bir ekip üyesinin işi (`job` özelliği) ekrana yazdırılıyor
  console.log("Age:", p.age); // Her bir ekip üyesinin yaşı (`age` özelliği) ekrana yazdırılıyor
});


// team.forEach((p) => {
  // console.log("****************");
  // console.log("Name:", p.name);
  // console.log("Surname:", p.surname);
  // console.log("Job:", p["job"]);
  // console.log("Age:", p.age);
// });
// 

//* DESTRUCTURING

team.forEach((p) => { // `team` dizisinin her bir öğesi için bir forEach döngüsü başlatılıyor
  const { name, surname, job, age } = p; // Her bir ekip üyesinin özellikleri, destructuring kullanılarak ayrı değişkenlere atanıyor
  console.log("****************"); // Her bir ekip üyesinin bilgileri arasına ayırmak için bir ayırıcı çizgi yazdırılıyor
  console.log("Name:", name); // Her bir ekip üyesinin adı ekrana yazdırılıyor
  console.log("Surname:", surname); // Her bir ekip üyesinin soyadı ekrana yazdırılıyor
  console.log("Job:", job); // Her bir ekip üyesinin işi ekrana yazdırılıyor
  console.log("Age:", age); // Her bir ekip üyesinin yaşı ekrana yazdırılıyor
});


// team.forEach((p) => {
  // const { name, surname, job, age } = p;
  // console.log("****************");
  // console.log("Name:", name);
  // console.log("Surname:", surname);
  // console.log("Job:", job);
  // console.log("Age:", age);
// });

//* functionund dondurdugu obje dogrudan dest. yapilabilir

const getInfo = () => { // `getInfo` adında bir okuma ifadesi (arrow function) tanımlanıyor
  return { // Fonksiyon, bir nesne döndürüyor
    id: 1, // Ürünün kimlik numarası
    productName: "Iphone", // Ürünün adı
    price: 30000, // Ürünün fiyatı
  };
};

console.log(getInfo()); // `getInfo` fonksiyonu çağrılarak, döndürülen nesne konsola yazdırılıyor
const { productName, price } = getInfo(); // Fonksiyondan dönen nesnenin özellikleri, destructuring kullanılarak ayrı değişkenlere atanıyor
console.log("Product Name:", productName); // Ürün adı konsola yazdırılıyor
console.log("Product Price:", price); // Ürün fiyatı konsola yazdırılıyor


// const getInfo = () => {
  // return {
    // id: 1,
    // productName: "Iphone",
    // price: 30000,
  // };
// };
// 
// console.log(getInfo());
// const { productName, price } = getInfo();
// console.log("Product Name:", productName);
// console.log("Product Price:", price);
// 
//? Fonksyionlarin obje parametreleri dogrudan dest. yapilabilir.

// calculate adında bir fonksiyon tanımlanıyor.
const calculate = ({ id, price }) => {
  // price değeri 1.1 ile çarpılarak artırılıyor ve sonuç konsola yazdırılıyor.
  console.log(price * 1.1);
};

// calculate fonksiyonu çağrılırken, id ve price değerlerini içeren bir obje geçiriliyor.
calculate({ id: 1, price: 3000 });


// const calculate = ({ id, price }) => {
  // console.log(price * 1.1);
// };
// 
// calculate({ id: 1, price: 3000 });

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//*Classical

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

const mehmet = names[1]; //* İndeksleme yapılarak "Mehmet" adlı öğe alınıyor

//* Dizinin belirli öğeleri farklı değişkenlere atanıyor
const [p1, p2, , p4] = names;
console.log(p1, p2, p4); //* İlk, ikinci ve dördüncü öğeler ekrana yazdırılıyor


// const mehmet = names[1]; //* indexing
// 
// const [p1, p2, , p4] = names;
// console.log(p1, p2, p4);
// 
//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.


//* REST: (Arrays)

const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

//* Diziden belirli öğeler ayrı değişkenlere atanıyor
const [anadol, reno, ...restAutos] = autos;
console.log(anadol, reno); //* İlk iki öğe ekrana yazdırılıyor
console.log(restAutos); //* Kalan öğeler restAutos değişkenine atanıyor ve ekrana yazdırılıyor


// const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];
// 
// const [anadol, reno, ...restAutos] = autos;
// console.log(anadol, reno);
// console.log(restAutos);

// const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];
// 
// const [anadol, reno, ...restAutos] = autos;
// console.log(anadol, reno);
// console.log(restAutos);
// 
//* REST (Objects)

const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

//* Object destructuring ile personel nesnesinden pName ve job özellikleri alınıyor
const { pName, job, ...ageSurname } = personel;

console.log(ageSurname); //* Yaş ve soyad özelliklerini içeren ageSurname nesnesi yazdırılıyor
console.log(pName, job); //* pName ve job özellikleri yazdırılıyor


// const personel = {
  // pName: "john",
  // surname: "smith",
  // job: "developer",
  // age: 30,
// };
// 
// const { pName, job, ...ageSurname } = personel;
// 
// console.log(ageSurname);
// console.log(pName, job);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.


const sum = (x, y) => x + y;

// Bu kod örneğinde rest parametreleri ve spread operatörü kullanılmıştır.

// İlk olarak sum fonksiyonu çağrılıyor.
console.log(sum(1, 2, 3, 4, 5, 6));

// sum fonksiyonunun tanımı:
function sum() {
  // arguments objesi üzerinden toplama işlemi yapılıyor.
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// Spread operatörü kullanılarak parametrelerin tümü bu fonksiyona geçirilir.
// İşlev aynı şekilde çalışır ve sonuç döndürür.

// Daha sonra sumAll fonksiyonu çağrılıyor.
console.log("SUM OF NUMBERS:", sumAll(1, 2, 3, 4, 5, 6));

// sumAll fonksiyonunun tanımı:
const sumAll = (...numbers) => {
  // Parametreler bir rest parametresi içinde toplanır.
  console.log(numbers); // numbers dizisi, 1, 2, 3, 4, 5, 6 değerlerini içerir
  // Rest parametresi kullanılarak dizi üzerinde reduce metoduyla toplama işlemi gerçekleştirilir.
  return numbers.reduce((s, n) => (s += n), 0);
};

// Son olarak showName fonksiyonu çağrılıyor.
showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");

// showName fonksiyonunun tanımı:
const showName = (name, surname, ...titles) => {
  // Rest parametresi titles, fonksiyona geçirilen argümanların bir dizisini tutar.
  console.log(titles); // ["Developer", "Instr", "Professor", "Dad"]
  // titles dizisi join metodu ile birleştirilerek summary adlı değişkene atanır.
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary); // Örnek çıktı: "Noah Adams is a Developer and Instr and Professor and Dad"
};


//? hata vermez fakat sadece 2 argumani toplar
// console.log(sum(1, 2, 3, 4, 5, 6));
// 
// 
// const sumAll = (...numbers) => {
  // console.log(numbers); //? (4) [1, 2, 3, 4]
  // return numbers.reduce((s, n) => (s += n), 0);
// };
// 
// console.log("SUM OF NUMBERS:", sumAll(1, 2, 3, 4, 5, 6));
// 
// const showName = (name, surname, ...titles) => {
  // console.log(titles);
  // const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  // console.log(summary);
// };
// 
// showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");

//*======================================================
//*  SPREAD (...)
//* ======================================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

//* array concatination

// flyingVecihles ve automobiles dizileri tanımlanır.
const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];
const automobiles = ["Truck", "Bus", "Car", "SUV"];

// İki diziyi birleştirerek allVehicles dizisi oluşturulur.
// İlk yöntemde iki dizinin referansları, allVehicles içinde birleştirilir.
// İkinci yöntemde ise spread operatörü kullanılarak dizilerin elemanları doğrudan birleştirilir.
const allVehicles = [flyingVecihles, automobiles]; // İki dizinin referansları birleştirilir.
const allVehicles = [...flyingVecihles, ...automobiles]; // Dizilerin elemanları doğrudan birleştirilir.

console.log(allVehicles);

// citrus ve fruits dizileri tanımlanır.
const citrus = ["orange", "lime", "lemon"];
const fruits = ["apple", ...citrus, "banana", "chery", "pear"];

// Spread operatörü kullanılarak citrus dizisinin elemanları fruits dizisine eklenir.
console.log(fruits);


// const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];
//! const automobiles = ["Truck", "Bus", "Car", "SUV"];
// const allVehicles = [flyingVecihles, automobiles];
// const allVehicles = [...flyingVecihles, ...automobiles];
// console.log(allVehicles);
// 
// const citrus = ["orange", "lime", "lemon"];
// const fruits = ["apple", ...citrus, "banana", "chery", "pear"];
// console.log(fruits);
// 
//* String spread

// str değişkeni tanımlanır.
let str = "Hello FS12";

// str değişkeninin her bir karakteri charArray adlı bir diziye dönüştürülür.
const charArray = [...str];

// Dizi charArray ve string str konsola yazdırılır.
console.log(charArray, str);

// charArray dizisinin ilk elemanı "X" olarak değiştirilir.
charArray[0] = "X";

// Dizi charArray ve string str konsola yazdırılır.
// Dizinin ilk elemanı değiştirildiği için bu değişiklik charArray üzerinde etkili olur, ancak str değişkeni değişmez.
console.log(charArray, str);


// let str = "Hello FS12";
// const charArray = [...str];
// console.log(charArray, str);
// 
// charArray[0] = "X";
// console.log(charArray, str);

//* Max() - Dizileri fonksiyonlara acik bir sekilde parametre vermek icin

// Math.max fonksiyonu kullanılarak bir dizi içindeki en büyük sayıyı bulma
console.log(Math.max(1, 3, 5, 2, 10));

// Spread operatörü kullanılarak bir dizi içindeki en büyük sayıyı bulma
const nums = [1, 3, 5, 2, 10];
console.log(Math.max(...nums));
// İlk olarak, Math.max doğrudan sayılar listesiyle çağrılmıştır. Bu durumda, fonksiyonun parametreleri arasında belirtilen sayılar arasındaki en büyük sayıyı döndürür.
// 
//  İkincisi, Math.max fonksiyonu spread operatörü (...) kullanılarak bir dizi içindeki en büyük sayıyı bulmak için kullanılmıştır. Bu durumda, spread operatörü, nums dizisinin her bir elemanını ayrı ayrı fonksiyonun parametreleri olarak geçirir. Bu sayede Math.max fonksiyonu, dizideki en büyük sayıyı bulur ve döndürür.

// console.log(Math.max(1, 3, 5, 2, 10));
// const nums = [1, 3, 5, 2, 10];
// console.log(Math.max(...nums))


//* Array Copy

const myNumbers = [1, 2, 3];
// -1, myNumbers dizisinin tüm elemanları, ve 7'yi içeren yeni bir dizi oluşturulur
const herNumbers = [-1, ...myNumbers, 7];
// herNumbers dizisinin kopyası oluşturulur
const hisNumbers = [...herNumbers];
// hisNumbers dizisine 101 sayısı eklenir
hisNumbers.push(101);

console.log("MY:", myNumbers, "HIS:", hisNumbers);

console.log(herNumbers);

// herNumbers dizisi, -1, myNumbers dizisinin tüm elemanları ve 7 değeriyle oluşturulur. Spread operatörü (...) kullanılarak myNumbers dizisinin elemanları tek tek alınarak yeni diziye eklenir.
//  hisNumbers dizisi, herNumbers dizisinin bir kopyasıdır. Bu, spread operatörü kullanılarak herNumbers dizisinin tüm elemanlarının yeni bir diziye kopyalanmasıyla gerçekleştirilir.
// Son olarak, hisNumbers dizisine push yöntemi kullanılarak 101 sayısı eklenir.
// İlgili console.log ifadeleriyle değişkenlerin içeriği konsola yazdırılır.

// const myNumbers = [1, 2, 3];
// const herNumbers = [-1, ...myNumbers, 7];
// const hisNumbers = [...herNumbers];
// hisNumbers.push(101);
// console.log("MY:", myNumbers, "HIS:", hisNumbers);
// 
// console.log(herNumbers);
// 
//* Object Copy

const myObj = { a: 1, b: 2, c: 4 };
const herObj = { a: 2, z: 4, c: 3 };

// myObj'nin kopyası oluşturulur
const copiedObj = { ...myObj };
console.log(copiedObj);

// copiedObj'nin 'c' özelliği değiştirilir
copiedObj.c = "33";
console.log(copiedObj, myObj); // Kopyalanan nesne üzerinde yapılan değişiklik, orijinal nesneyi etkilemez

// herObj ve myObj birleştirilir, varsa aynı özelliklerde myObj, önceliği alır
const combinedObj = { ...herObj, ...myObj };

console.log(combinedObj);


// const myObj = { a: 1, b: 2, c: 4 };
// const herObj = { a: 2, z: 4, c: 3 };
// 
// const copiedObj = { ...myObj };
// console.log(copiedObj);
// 
// copiedObj.c = "33";
// console.log(copiedObj, myObj);
// 
// const combinedObj = { ...herObj, ...myObj };
// 
// console.log(combinedObj);
// 