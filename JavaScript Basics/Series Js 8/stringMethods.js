console.log("*** STRING METHODS ***")

let str1 = "Clarusway"
const str2 = "Hello"
const str3 = "Full Stack"
console.log(str1, typeof str1);
const str4 = new String("Hello Fs");
console.log(typeof str4);
console.log(str1.toLocaleLowerCase());

const sayi = 5;
const str5 = str1+str2+str3+sayi;
console.log(str5,typeof str5)


console.log(str1.concat(str2))
console.log(str1,str2)
str1 = str1.concat(str3, "Path")
console.log(str1)

const myName = "Noah Adams"
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
let yourName = "ismet"
// yourName = yourName.toUpperCase();
// yourName = yourName.toLocaleUpperCase()
// yourName = yourName.toLocaleUpperCase('tr')
console.log(yourName)

// const esitMi = (str1, str2) => {
    // return str1.toLocaleUpperCase() === str2.toLocaleUpperCase() 
    // ? `${str1} ile ${str2} Esittir`
    // : `${str1} ile ${str2} Esit degildir`;
// }
// esitMi("merhaba", "MerhabA")
console.log(esitMi("merHaba", "MERHABA"));