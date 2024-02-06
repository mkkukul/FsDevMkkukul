
// //* ---------------------------------------------------------
// //* 3- Object literal (En cok tercih edilen yontem)
// //* ---------------------------------------------------------

// Bir çalışan nesnesi oluşturulması
const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
  salary: "140000",
};

// Çalışan nesnesinin tüm bilgilerinin ekrana yazdırılması
console.log(worker);

// Çalışanın iş bilgisinin ekrana yazdırılması
console.log("JOB:", worker.job);

// Çalışanın bildiği dillerin ekrana yazdırılması (dizi olarak)
console.log("Lang:", worker["languages"]);

// Çalışanın üçüncü dil bilgisinin ekrana yazdırılması
console.log(worker.languages[2]);

// Çalışanın bildiği dillerin her birinin ayrı ayrı ekrana yazdırılması
worker["languages"].forEach((l) => console.log(l));

// Çalışana doğum tarihi ve e-posta ekleme
worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

// Çalışanın maaşının artırılması (iki farklı yöntem)
// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] *= 1.1;
console.log(worker);

// Nesne kopyalama
const person = worker; // Sığ kopyalama
console.log("PERSON:", person);


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