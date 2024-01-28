// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");
//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// Kullanıcıdan 0-100 arasında bir not al
let not = prompt("Lütfen 0-100 arasında bir not giriniz");

// Not 0-100 arasında olmadığı sürece kullanıcıdan not almaya devam et
while (not < 0 || not > 100) {
    console.log("Not 0-100 arasında olmalıdır");
    not = prompt("Lütfen 0-100 arasında bir not giriniz");
}

// Not 0-100 arasında olduğunda kullanıcıya girdiği notu göster
console.log("Girdiğiniz Not:", not);

// Eğer not 0-100 arasında değilse, kullanıcıya uyarı ver
if (not < 0 || not > 100) {
    alert("Not 0-100 arasında olmalıdır");
}


// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz.

// Kullanıcıdan 0-100 arasında bir not al
let not1;

// Do-while döngüsü kullanarak, geçerli bir not girilene kadar devam et
do {
    // Kullanıcıdan notu al (prompt fonksiyonuyla alınan değer string olduğu için "+" işlemiyle sayıya çevriliyor)
    not1 = +prompt("Lütfen 0-100 arasında bir not giriniz.");

    // Eğer not 0-100 arasında değilse, uyarı ver
    if (not1 < 0 || not1 > 100)
        console.log("Not 0-100 arasında olmalıdır");
} while (not1 < 0 || not1 > 100);

// Geçerli bir not girildiğinde notu konsola yazdır
console.log("Girdiğiniz Not:", not1);
