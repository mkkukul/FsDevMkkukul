// Bu kod parçası, bir JavaScript nesnesi oluşturma, özellik eklemesi yapma ve mevcut özelliklerin üzerinde değişiklik yapma işlemlerini göstermektedir.

// worker adında bir nesne oluşturuluyor. Bu nesne, bir çalışanın çeşitli bilgilerini içerir.
const worker = {
    name: "Can",                        // Çalışanın adı
    surname: "Canan",                   // Çalışanın soyadı
    age: 33,                            // Çalışanın yaşı
    job: "developer",                   // Çalışanın mesleği
    languages: ["C++", "Java", "Javacript", "Pyhton", "Go"], // Çalışanın bildiği diller
    salary: "140000",                   // Çalışanın maaşı (string olarak tanımlanmış)
  };
  
  // Oluşturulan worker nesnesi konsola yazdırılıyor.
  console.log(worker);
  
  // worker nesnesinin "job" özelliğine doğrudan nokta (.) ile erişilerek konsola yazdırılıyor.
  console.log("JOB:", worker.job);
  
  // worker nesnesinin "languages" özelliğine köşeli parantez kullanarak erişilerek konsola yazdırılıyor.
  console.log("Lang:", worker["languages"]);
  
  // worker nesnesinin "languages" özelliğinin 3. diline (JavaScript) doğrudan indeks kullanarak erişilerek konsola yazdırılıyor.
  console.log(worker.languages[2]);
  
  // worker nesnesinin "languages" özelliğindeki her bir dili döngü yardımıyla konsola yazdırıyoruz.
  worker["languages"].forEach((l) => console.log(l));
  
  // worker nesnesine yeni özellikler (dob ve email) ekleniyor.
  worker.dob = "1990";          // Doğum yılı eklendi.
  worker.email = "can@gmail.com"; // E-posta adresi eklendi.
  console.log(worker);           // Güncellenen nesneyi konsola yazdırılıyor.
  
  // worker nesnesinin "salary" özelliği, %10 artırılıyor.
  worker["salary"] = worker["salary"] * 1.1; // Yüzde 10 artırma işlemi
  // Alternatif olarak, aynı artırma işlemini kısa bir şekilde yapabiliriz:
  // worker["salary"] *= 1.1;
  console.log(worker);           // Güncellenen maaşıyla nesneyi konsola yazdırılıyor.
  