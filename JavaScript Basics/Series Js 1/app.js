// console.log('app.js is loaded')

//  let firstname=prompt("Enter Your Name:");
//  alert("firstname :" + firstname);

// let sonuc = confirm ('are you legal?');
// console.log(sonuc);

// var myNumber1 = 11;
// console.log(myNumber1);
// let v1 = 55;
// console.log(v1)

// /*
// */

// var myNumber1 = 22;
// console.log(myNumber1)
// let v2 = 88;
// console.log(v2)

// Bir öğrenci nesnesi oluştur
const student = {
    name: 'Nedim',
    age: 34,
};

// İlk öğrenciyi konsola yazdır
console.log(student); // { name: 'Nedim', age: 34 }

// Diğer öğrenciye ilk öğrencinin referansını ata
const otherStudent = student;

// Diğer öğrencinin adını değiştir
otherStudent.name = 'Dan Brown';

// İlk öğrenciyi ve diğer öğrenciyi konsola yazdır
console.log(student);
console.log(otherStudent);
