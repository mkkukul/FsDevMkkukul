
// //* ---------------------------------------------------------
// //* 3- Object literal (En cok tercih edilen yontem)
// //* ---------------------------------------------------------

//! Bir çalışan nesnesi oluşturulması
const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
  salary: "140000",
};

//! Çalışan nesnesinin tüm bilgilerinin ekrana yazdırılması
console.log(worker);

//! Çalışanın iş bilgisinin ekrana yazdırılması
console.log("JOB:", worker.job);

//! Çalışanın bildiği dillerin ekrana yazdırılması (dizi olarak)
console.log("Lang:", worker["languages"]);

//! Çalışanın üçüncü dil bilgisinin ekrana yazdırılması
console.log(worker.languages[2]);

//! Çalışanın bildiği dillerin her birinin ayrı ayrı ekrana yazdırılması
worker["languages"].forEach((l) => console.log(l));

//! Çalışana doğum tarihi ve e-posta ekleme
worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

//! Çalışanın maaşının artırılması (iki farklı yöntem)
// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] *= 1.1;
console.log(worker);

// Nesne kopyalama
const person = worker; // Sığ kopyalama
console.log("PERSON:", person);
// 
//  console.log(worker): Çalışan nesnesi tüm detaylarıyla ekrana yazdırılır.
//  console.log("JOB:", worker.job): Çalışanın iş bilgisi ekrana yazdırılır.
//  console.log("Lang:", worker["languages"]): Çalışanın bildiği diller dizi olarak ekrana yazdırılır.
//  console.log(worker.languages[2]): Çalışanın üçüncü dil bilgisi ekrana yazdırılır.
//  worker["languages"].forEach((l) => console.log(l)): Çalışanın bildiği her dil ayrı ayrı ekrana yazdırılır.
//  worker.dob = "1990"; ve worker.email = "can@gmail.com";: Çalışana doğum tarihi ve e-posta eklenir.
//  Maaş artırma işlemi iki farklı yöntemle yapılır.
//  const person = worker; ile sığ kopyalama yapılır ve bu kopya person değişkenine atanır.
// 
// const worker = {
//   name: "Can",
//   surname: "Canan",
//   age: 33,
//   job: "developer",
//   languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
//   salary: "140000",
// };
// console.log(worker);

// console.log("JOB:", worker.job);

// console.log("Lang:", worker["languages"]);

// console.log(worker.languages[2]);

// worker["languages"].forEach((l) => console.log(l));

// worker.dob = "1990";
// worker.email = "can@gmail.com";
// console.log(worker);

// // worker["salary"] = worker["salary"] * 1.1;
// worker["salary"] *= 1.1;
// console.log(worker);

// //* Object Copy
// const person = worker; //! Shallow (Sig - Sığ) Copying
// console.log("PERSON:", person);