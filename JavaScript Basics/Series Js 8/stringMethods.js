// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

//!1- Klasik yöntem (String Literals) ile string tanımlanırsa bu string bir primitive değişkendir.
let str1 = "Clarusway";
// Char => C, l, a,...

const str2 = " Hello";
const str3 = " Full Stack";

console.log(str1, typeof str1); // "Clarusway" string'i ve türü olan "string"i console'da yazdırılır.

//!2 - Non-primitive String tanımlama
const str4 = new String("Non-Primitive"); // String nesnesi oluşturulur.
console.log(typeof str4); // "object" olarak türü belirlenir, çünkü bir nesnedir.

//?----------------------------------------

console.log(str1.toLowerCase()); // "Clarusway" string'inin küçük harfe çevrilmiş hali console'da yazdırılır.




//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi; // String birleştirme işlemi (concatenation)

console.log(str5, typeof str5);




//* ---------------------------------------------------
//*  concat() - immutable
//* ---------------------------------------------------

// str1 ve str2 string'lerini birleştirip, yeni bir string elde etmek için concat() kullanılır.
console.log(str1.concat(str2)); //* Orijinal değerler bozulmaz
console.log(str1, str2);

// Yeni bir değer oluşturup atama yapılır. concat() ile birleştirilen str1, str3 ve " Path" ile güncellenir.
str1 = str1.concat(str3, " Path");
console.log(str1);






//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ----------------------------------------------------------

// const myName = "Noah Adams";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// 
// let yourName = "ismet";
// yourName = yourName.toUpperCase();
// yourName = yourName.toLocaleUpperCase('tr');
// yourName = yourName.toLocaleUpperCase();
// console.log(yourName);
// myName değişkenindeki string'i tamamen büyük harfe dönüştürür.
console.log(myName.toUpperCase());

// myName değişkenindeki string'i tamamen küçük harfe dönüştürür.
console.log(myName.toLowerCase());

// yourName değişkenindeki string'i tamamen büyük harfe dönüştürür. (Alternatif yollar da kullanılabilir)
yourName = yourName.toLocaleUpperCase();
console.log(yourName);


//! ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu
//! donduren fonksiyonu yaziniz.

// İki string'i karşılaştıran fonksiyon. Büyük/küçük harf duyarsızdır.
const esitMi = (str1, str2) => {
  return str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} Eşittir`
    : `${str1} ile ${str2} Eşit Değildir`;
};

// Fonksiyonun kullanımı örnekleri
console.log(esitMi("MerHaba", "MERHABA")); // "MerHaba ile MERHABA Eşittir"
console.log(esitMi("Hello", "Hell")); // "Hello ile Hell Eşit Değildir"


// const esitMi = (str1, str2) => {
  // return str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    // ? `${str1} ile ${str2} Esittir`
    // : `${str1} ile ${str2} Esit degildir`;
// };
// 
// const esitMi = (str1, str2) =>
  // str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    // ? `${str1} ile ${str2} Esittir`
    // : `${str1} ile ${str2} Esit degildir`;
// 
// console.log(esitMi("MerHaba", "MERHABA"));
// console.log(esitMi("Hello", "Hell"));

//* ----------------------------------------------------------
//* localeCompare()
//* ----------------------------------------------------------
const a = "réservé"; // aksanlarla, küçük harfler
const b = "RESERVE"; // aksansız, büyük harfler

// String karşılaştırması, harf duyarlılığı "base" (aksanları göz ardı eder) olarak ayarlanmış.
const compareResult = a.localeCompare(b, "en", { sensitivity: "base" });

// Sonucu console'da yazdır
console.log(compareResult);
// Negatif değer: a önce gelir.
// Pozitif değer: b önce gelir.
// 0: a ve b eşittir.
// Yani, bu kodun çıktısı, a stringinin b'den önce gelmesi durumunda negatif, b stringinin a'dan önce gelmesi durumunda pozitif olacaktır. Eğer iki string eşitse, çıktı 0 olacaktır.

// const a = "réservé"; // with accents, lowercase
// const b = "RESERVE"; // no accents, uppercase
// console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// 
//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A'
//? 'CASE: a ≠ b, a = á, a ≠ A'

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------
const str6 = "Full Stack Path and DS path";

// 5. indeksteki karakteri alır (dizilerde indeks 0'dan başlar)
console.log(str6.charAt(5)); // Çıktı: S

// 4. indeksteki karakteri alır
console.log(str6.charAt(4)); // Çıktı: " " (boşluk karakteri)

// Parametre verilmediği durumda, 0. indeksteki karakteri alır
console.log(str6.charAt()); // Çıktı: F (ilk karakter)

// 14. indeksteki karakteri alır
console.log(str6.charAt(14)); // Çıktı: h

// const str6 = "Full Stack Path and DS path";
// console.log(str6.charAt(5)); //* S
// console.log(str6.charAt(4)); //* " "
// console.log(str6.charAt()); //* F (ilk indistekini dondurur)
// console.log(str6.charAt(14)); //* h

//! lenght bir property (objenin degiskenidir) dir ve string'in
//! karakter sayisini tutar.

const str6 = "Full Stack Path and DS path";

// String'in uzunluğunu alır
console.log(str6.length); // Çıktı: 27

// String'in son karakterini alır
// String indeksleri 0'dan başladığı için, son karakterin indeksi "uzunluk - 1" olacaktır.
console.log(str6.charAt(str6.length - 1)); // Çıktı: h


// console.log(str6.length); //* 27

//* String son harfini ogrenmek istersek
// console.log(str6.charAt(str6.length - 1)); //* 0 -26 => 27 eleman

//* ----------------------------------------------------------
//* includes() - case sentive
//* ----------------------------------------------------------

const word = "To be or not to be, that is the question";

// Bir string, belirli bir alt string'i içerip içermediğini kontrol eder
console.log(word.includes("to be")); // Çıktı: true

// Büyük-küçük harf duyarlıdır
console.log(word.includes("That")); // Çıktı: false

// Boş bir alt string, her zaman true döner
console.log(word.includes("")); // Çıktı: true

// Belirli bir indeksten sonra kontrol eder
console.log(word.includes("to be", 14)); // Çıktı: false

// Belirli bir indeksten sonra kontrol eder
console.log(word.includes("to be", 13)); // Çıktı: true


// const word = "To be or not to be, that is the question";
// 
// console.log(word.includes("to be")); //? true
// console.log(word.includes("That")); //? false
// console.log(word.includes("")); //? true
// console.log(word.includes("to be", 14)); //? false
// console.log(word.includes("to be", 13)); //? true
// 
//! NOT: case insentive kullanmak icin str baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.
//* ----------------------------------------------------------
//* indexOf() , lastIndexOf() - case sensitive
//* ----------------------------------------------------------

const word = "To be or not to be, that is the question";

// İlk olarak "or" alt string'inin başlangıç indeksini bulur
const toBe = word.indexOf("or");
console.log(toBe); // Çıktı: 6

// İlk olarak "be" alt string'inin başlangıç indeksini bulur
console.log(word.indexOf("be")); // Çıktı: 3

// Son olarak "be" alt string'inin başlangıç indeksini bulur
console.log(word.lastIndexOf("be")); // Çıktı: 16

// Büyük-küçük harf duyarlıdır, bu nedenle "BE" alt string'i bulunamaz ve -1 döner
console.log(word.lastIndexOf("BE")); // Çıktı: -1
// indexOf("or"): "or" alt string'inin ilk başlangıç indeksini bulur.
// indexOf("be"): "be" alt string'inin ilk başlangıç indeksini bulur.
// lastIndexOf("be"): "be" alt string'inin son başlangıç indeksini bulur.
// lastIndexOf("BE"): "BE" alt string'i büyük harfle yazılmış olduğu için bulunamaz ve -1 döner.


// const toBe = word.indexOf("or");
// console.log(toBe); //? 6
// console.log(word.indexOf("be")); //? 3
// console.log(word.lastIndexOf("be")); //? 16
// console.log(word.lastIndexOf("BE")); //? -1

//* ----------------------------------------------------------
//* search()
//* ----------------------------------------------------------

const buyukHarf = /[A-Z]/;
const nokta = /[.]/;
const virgul = /[,]/;

// İlk büyük harfin indeksini bulur (0'dan başlar)
console.log(word.search(buyukHarf)); // Çıktı: 0

// Virgülün indeksini bulur (ilk bulduğu indeksi döner)
console.log(word.search(virgul)); // Çıktı: 18

// Noktanın indeksini bulur, ancak bulamazsa -1 döner
console.log(word.search(nokta)); // Çıktı: -1

//? search(buyukHarf): İlk büyük harfin indeksini bulur. Dönen indeks 0'dan başlar.
//? search(virgul): Virgülün indeksini bulur. İlk bulduğu indeksi döner (18).
//? search(nokta): Noktanın indeksini bulur, ancak bulamazsa -1 döner.

// const buyukHarf = /[A-Z]/;
// const nokta = /[.]/;
// const virgul = /[,]/;
// console.log(word.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
// console.log(word.search(virgul)); //?  18
// console.log(word.search(nokta)); //? -1

//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------

let word2 = "Sen gulunce guller acar gul pembe!";

// Yeni bir String nesnesi oluşturur (fakat bu kullanım genellikle gereksizdir)
console.log(new String(word2));

// String "Sen" ile başlıyor mu?
console.log(word2.startsWith("Sen")); // Çıktı: true

// String "gulunce" ile başlıyor mu?
console.log(word2.startsWith("gulunce")); // Çıktı: false

// 4. indeksten itibaren String "gulunce" ile başlıyor mu?
console.log(word2.startsWith("gulunce", 4)); // Çıktı: true

// String "!" ile bitiyor mu?
console.log(word2.endsWith("!")); // Çıktı: true

// 23. indeksten itibaren String "acar" ile bitiyor mu?
console.log(word2.endsWith("acar", 23)); // Çıktı: true

//* startsWith("Sen"): String "Sen" ile başlıyor mu? Çıktı: true
//* startsWith("gulunce"): String "gulunce" ile başlıyor mu? Çıktı: false
//* startsWith("gulunce", 4): 4. indeksten itibaren String "gulunce" ile başlıyor mu? Çıktı: true
//* endsWith("!"): String "!" ile bitiyor mu? Çıktı: true
//* endsWith("acar", 23): 23. indeksten itibaren String "acar" ile bitiyor mu? Çıktı: true

// let word2 = "Sen gulunce guller acar gul pembe!";
// console.log(new String(word2));
// console.log(word2.startsWith("Sen")); //? true
// console.log(word2.startsWith("gulunce")); //? false
// console.log(word2.startsWith("gulunce", 4)); //? true
// console.log(word2.endsWith("!")); //? true
// console.log(word2.endsWith("acar", 23)); //? true

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------
let oku = "Oku Baban gibi, saf olma, saf olma";
// console.log(oku.replace("saf olma", "basarili ol"));
oku = oku.replace("saf olma", "basarili ol");
// oku = oku.replace(/saf olma/gi, "basarili ol");
console.log(oku);

oku = oku.replace(/BASARILI/gi, "Zengin");
console.log(oku);

//! NOT: replace metodu eger Regex ile aksi belirtilmiyorsa (g) sadece ilk buldugunu degistirir.

//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------

let degistir = "daglar daglar yol ver gecem..";

// "daglar" kelimesini "Dağlar" ile değiştir
degistir = degistir.replaceAll("daglar", "Dağlar");
console.log(degistir); // Çıktı: "Dağlar Dağlar yol ver gecem.."

// Regex kullanarak "no" kelimesini "Hayir" ile değiştir (büyük-küçük harf duyarsız)
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));
// Çıktı: "Hayir woman, Hayir cry Hayir woman, Hayir cry, eh, yeah Little darling, don't shed Hayir tears Hayir woman, Hayir cry, eh"
// replaceAll("daglar", "Dağlar"): "daglar" kelimesini "Dağlar" ile değiştirir.
// replaceAll(/no/gi, "Hayir"): "no" kelimesini büyük/küçük harf duyarsız olarak "Hayir" ile değiştirir.

// let degistir = "daglar daglar yol ver gecem..";
// degistir = degistir.replaceAll("daglar", "Dağlar");
// console.log(degistir);
// 
// ?Regex de kullanilabilir.
// let degistir2 =
  // "No woman, no cry" +
  // " No woman, no cry, eh, yeah" +
  // " Little darling, don't shed no tears" +
  // " No woman, no cry, eh";
// 
// console.log(degistir2.replaceAll(/no/gi, "Hayir"));

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------

const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

// slice kullanımı
const sliced = veysel.slice(33);
console.log(sliced, typeof sliced); // Çıktı: "gunduz gece.." string

console.log(veysel.slice(17, 30)); // Çıktı: "dayim yuruyor."
console.log(veysel.slice(-10)); // Çıktı: "duz gece.."
console.log(veysel.slice(-23, -19)); // Çıktı: "yuru"

// substring kullanımı
console.log(veysel.substring(17, 30)); // Çıktı: "dayim yuruyor"
// Negatif indeks substring ile kullanılamaz.
console.log(veysel.substring(-10)); // Çıktı: "Uzun ince bir yoldayim yuruyorum gunduz gece.."

// slice(startIndex): startIndex'den itibaren string'in sonuna kadar olan kısmı alır.
// slice(startIndex, endIndex): startIndex'den endIndex'e kadar olan kısmı alır.
// slice(-startIndex): string'in sonundan startIndex kadar olan kısmı alır.
// slice(-startIndex, -endIndex): string'in sondan startIndex kadar olan ve sondan endIndex kadar olan kısmı alır.
// substring(startIndex, endIndex): startIndex ile endIndex arasındaki kısmı alır. Negatif indeks kullanılamaz.






// const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";
// 
// const sliced = veysel.slice(33);
// console.log(sliced, typeof sliced); //? gunduz gece..
// 
// console.log(veysel.slice(17, 30)); //? dayim yuruyor.
// console.log(veysel.slice(-10)); //? duz gece..
// console.log(veysel.slice(-23, -19)); //? yuru
// 
// console.log(veysel.substring(17, 30)); //? dayim yuruyor
// ! negatif indeks substring ile kullanilamaz.
// console.log(veysel.substring(-10)); //? Uzun ince bir yoldayim yuruyorum gunduz gece..

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------

const tarkan = "Gel gunduzle gece olalim";

// Boşluklara göre ayırarak bir dizi oluşturur
const splited = tarkan.split(" ");
console.log(splited, typeof splited); // Çıktı: [ 'Gel', 'gunduzle', 'gece', 'olalim' ] array

// Her bir karakteri ayırarak bir dizi oluşturur
const chars = tarkan.split("");
console.log(chars); // Çıktı: [ 'G', 'e', 'l', ' ', 'g', 'u', 'n', 'd', 'u', 'z', 'l', 'e', ' ', 'g', 'e', 'c', 'e', ' ', 'o', 'l', 'a', 'l', 'i', 'm' ] array
//! split(separator): separator parametresine göre string'i ayırarak bir dizi oluşturur. Bu örnekte boşluklara göre veya karakterlere göre ayırma kullanılmıştır.

// const tarkan = "Gel gunduzle gece olalim";
// const splited = tarkan.split(" ");
// console.log(splited, typeof splited); //! Bosluklara göre ayirarak Array'e cevirdi.
// 
// const chars = tarkan.split("");
// console.log(chars); //* null karakterine göre harfleri ayırarark bir char dizisi oluşturdu.
// 
//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------

const ramazan = "    Hoş geldin ya şehri Ramazan     ";
console.log(ramazan); // İlk hali: "    Hoş geldin ya şehri Ramazan     "
console.log(ramazan.length); // İlk hali uzunluğu: 36

const trimmedRamazan = ramazan.trim();
console.log(trimmedRamazan); // Boşlukları temizlenmiş hali: "Hoş geldin ya şehri Ramazan"
console.log(trimmedRamazan.length); // Temizlenmiş hali uzunluğu: 27


// const ramazan = "    Hoş geldin ya şehri Ramazan     ";
// console.log(ramazan);
// console.log(ramazan.length); // 36
// console.log(ramazan.trim());
// console.log(ramazan.trim().length); //27

//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE
