// Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her  anlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// Kullanıcının tahmin hakkı
let hak = 5;

// Bilgisayarın rastgele seçtiği sayı
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);

// Kullanıcının tahminini tutan değişken
let tahmin;

// Kullanıcının tahmin etmeye çalıştığı tahmin oyunu
do {
    // Kullanıcıdan tahmin al (prompt fonksiyonuyla alınan değer string olduğu için "+" işlemiyle sayıya çevriliyor)
    tahmin = Number(prompt("Lütfen 0-100 arasında bir tahmin giriniz"));

    // Kullanıcının hakkını azalt
    hak -= 1;

    // Eğer tahmin doğruysa, tebrik et ve döngüden çık
    if (tahmin === rastgele) {
        console.log(`Tebrikler! ${5 - hak} kerede bildiniz`);
        break;
    } else if (tahmin < rastgele) {
        console.log("ARTTIR ⬆️");
    } else if (tahmin > rastgele) {
        console.log("AZALT ⬇️");
    }
} while (hak > 0);

// Eğer hakkı bitmişse, kullanıcıya kaybettiğini bildir
if (hak === 0) {
    console.log("Üzgünüz, oyunu kaybettiniz 🥹🥹");
}
