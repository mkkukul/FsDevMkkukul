    const car = {
    name: "BMW",
    model: 1990,
    engine: 1.6,
    colors: ["blue", "purple"],
    };
    const name1 = car.name
    const model1 = car["model"]
   console.log(name1)
   console.log(model1)
   const {name, model, engine, colors} = car;
   console.log(name,model,engine,colors)

   const cars = {
    car1: {
      name: "BMW",
      model: 1990,
      engine: 1.6,
    },
    car2: {
      name: "Mercedes",
      model: 2022,
      engine: 2.0,
    },
    };
    const {car1,car2} = cars
    console.log(car1)
    const { name: c1Name, model: c1Model } = car1;
    const { name: c2Name, model: c2Model } = car2;

    console.log(c1Name, c2Name);


    //*************************************
    const team = [
        {
          name: "Josh",
          surname: "Barry",
          job: "developer",
          age: 30,
        },
        {
          name: "Josh",
          surname: "Barry",
          job: "tester",
          age: 45,
        },
        {
          name: "Hazel",
          surname: "Nut",
          job: "team lead",
          age: 40,
        },
      ];
      team.forEach((p) => {
        console.log("****************");
        console.log("Name:", p.name);
        console.log("Surname:", p.surname);
        console.log("Job:", p["job"]);
        console.log("Age:", p.age);
      });
      team.forEach((p) => {
        const {name,surname,job,age}=p
        console.log("****************");
        console.log("Name:", p.name);
        console.log("Surname:", p.surname);
        console.log("Job:", p["job"]);
        console.log("Age:", p.age);
      });
    
      const getInfo = () => {
        return {
          id: 1,
          productName: "Iphone",
          price: 30000,
        };
      };
      console.log(getInfo());
    //   const {productName,price} = getInfo()
    //   console.log("Product Name", productName)
    //   console.log("Price:", price)
    //   const calculate = ({id, price})=> {
        // console.log(price*1.1)
    //   }
    //   calculate({id:1,price:3000})
      
      const calculate = ({ id, price }) => {
        // 1.1 ile çarpılan price değerini yuvarla
        const roundedPrice = Math.round(price * 1.1);
      
        // Yuvarlanmış değeri konsola yazdır
        console.log(roundedPrice);
      };
      
      // Fonksiyonu çağırırken id ve price değerlerini sağla
      calculate({ id: 1, price: 3000 });
      
    const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

    //*Classical
    const mehmet = names[1]; //* indexing

    const [p1, p2, , p4] = names;
    console.log(p1, p2, p4);

    const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

    const [anadol, reno, ...restAutos] = autos;
    console.log(anadol, reno);
    console.log(restAutos);
    const personel = {
        pName: "john",
        surname: "smith",
        job: "developer",
        age: 30,
      };
      
      const { pName, job, ...ageSurname } = personel;
      
      console.log(ageSurname);
      console.log(pName, job);
      
      
     // Uçan taşıtları temsil eden bir dizi oluşturuluyor.
  const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];

// Kara taşıtlarını temsil eden bir dizi oluşturuluyor.
const automobiles = ["Truck", "Bus", "Car", "SUV"];

// İki tip taşıtı içeren iç içe bir dizi oluşturuluyor.
const allVehicles = [flyingVecihles, automobiles];
console.log(allVehicles);

// Spread operatörü kullanarak iki diziyi birleştirip tek bir düz diziyi temsil eden bir dizi oluşturuluyor.
const allVehicles2 = [...flyingVecihles, ...automobiles];
console.log(allVehicles2);
let str = "Hello FS12"
const charArray = [ ...str];
console.log(charArray,str);
charArray[0] ="X";
console.log(charArray,str); 