// const arabalar = new Object();
// arabalar.marka = "BMW";
// arabalar.motor = "1.3";
// arabalar.model = 2023;
// arabalar.lpg = true;
// console.log(arabalar); // { marka: 'BMW', motor: '
// 
// 
// console.log(arabalar.lpg)
// console.log("MODEL",arabalar["model"])
// const key = "motor"
// console.log(arabalar[key])
// arabalar.motor = "1.6"
// console.log(arabalar)
// 
// 
// function Personel(id,ad,maas){
    // this.perId = id;
    // this.perAd = ad;
    // this.maas = 15000;
    // console.log(this)
// }
// const kisi1 = new Personel("1234567890", "Mustafa", 15000);
// const kisi2 = new Personel("1234567800", "Canan", 12000);
// console.log(kisi1)

const worker = {
    name :"Can",
    surname :"Can",
    age :33,
    job :"developer",
    languages :["C++", "Java", "JS", "Pyhton", "Go"],
    salary :140000,
};
console.log(worker)
console.log(worker.languages[0])
console.log("Lang:", worker["languages"])
worker["languages"].forEach((l)=> console.log(l))
worker.dob = "1990";
worker.email ="can@mail.com"
console.log(worker)
// worker["salary"] = worker["salary"]*1.1;
worker["salary"]*= 1.1;
console.log(worker["salary"])
console.log(worker.salary)
const person = worker;
console.log("Person:", person)
person.dob = "2000";
// console.log()
let deepCobyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker))
deepCobyOfWorker.dob ="2022"
console.log("DEEP:", deepCobyOfWorker)

const personel = {
    name :"Can",
    surname :"Can",
    dob :1990,
    job :"developer",
    salary :140000,
    drivingLisence :true,
    calculateAge: function() {
        return new Date().getFullYear() - this.dob;
    },
    summary: function() {
        return `${this.name} is ${this.calculateAge()} years old`;
    }
    // summary: () => {
        // console.log(this)
        // return `${this.name} is ${this.calculateAge()} years old`
    // }
};
// new Date().getFullYear()
console.log("DOB:",personel.calculateAge())
console.log("SUMMARY:", personel.summary());

const people = {
    person1: {
        name: ["Can", "Mustafa"],            
        surname: "Canan",       
        dob: "1990",            
        job: "developer",       
        salary: "140000",       
        drivingLicense: true    
    },
    person2: {
        name: "John",           
        surname: "Sweet",       
        dob: "1990",            
        job: "tester",          
        salary: "110000",       
        drivingLicense: false   
    },
    person3: {
        name: "Steve",          
        surname: "Job",         
        dob: "2000",            
        job: "developer",       
        salary: "90000",        
        drivingLicense: true    
    },
};
console.log(people.person1.name[1])
console.log("Salary of P2",people.person2.salary)
// console.log(people)
