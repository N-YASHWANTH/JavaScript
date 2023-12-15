//New Features in ECMAScript 2016

//Exponentiation (**)->This exponentiation operator (**) raises the first operand to the power of the second operand.
//This works similar to Math.pow(x,y)
let x = 5;
let y = x ** 2;
console.log(y);//25

//Exponentiation assignment (**=)
let z=5
z**=2
console.log(z);//25

//Array includes()
numbers=[0,1,2,3,4,5]
console.log(numbers.includes(4));//true
console.log(numbers.includes(10));//false