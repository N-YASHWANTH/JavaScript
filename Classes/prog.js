//creating class

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}


//Creating objects by invoking constructor method

let car1=new Car("Ford",2015)
let car2=new Car("Volswagen",2018)


//creating objects and initializing properties.

let car3=new Car()
car3.name="Swift"
car3.year=2016

let car4=new Car()
car4.name="Benz"
car4.year=2019


// Accessing Objects

console.log(car1);
console.log(car2);


//Accessing individual properties

console.log("Name of car3-----------",car3.name);
console.log("Year of car3-----------",car3.year);

console.log("Name of car4-----------",car4.name);
console.log("Year of car4-----------",car4.year);
