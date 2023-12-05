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

const esitMi = (str1, str2) => {
    return str1.toLocaleUpperCase() === str2.toLocaleUpperCase() 
    ? `${str1} ile ${str2} Esittir`
    : `${str1} ile ${str2} Esit degildir`;
}
// esitMi("merhaba", "MerhabA")
console.log(esitMi("merHaba", "MERHABA"));

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0

const str6 = "Full Stack Path and DS path"
console.log(str6.charAt(5));
console.log(str6.charAt(4));
console.log(str6.charAt());
console.log(str6.charAt(14));
console.log(str6.length);
console.log(str6.charAt(str6.length-1));

const word = "To be or not to be, that is the question";
console.log(word.includes("to be"));
console.log(word.includes("That"));
console.log(word.includes(""));
console.log(word.includes("to be", 14));
console.log(word.includes("to be", 13));


const toBe = word.indexOf("or")
console.log(toBe);
// const be = word.indexOf("be")
console.log(word.indexOf("be"))
console.log(word.lastIndexOf("be"))
console.log(word.lastIndexOf("BE"))
// console.log(be);





// console.log(word)
// console.log(str4)



