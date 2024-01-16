const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2023;
arabalar.lpg = true;
console.log(arabalar); // { marka: 'BMW', motor: '


console.log(arabalar.lpg)
console.log("MODEL",arabalar["model"])
const key = "motor"
console.log(arabalar[key])
arabalar.motor = "1.6"
console.log(arabalar)


function Personel(id,ad,maas){
    this.perId = id;
    this.perAd = ad;
    this.maas = 15000;
}
const kisi1 = new Personel("1234567890", "Mustafa", 15000);
console.log(kisi1)