//New Features in ECMAScript 2017

//String padding
str="5"
// str=str.padStart(4,0)//Here first parameter represents length and second parameter represents character to be added
// console.log(str);

str=str.padEnd(4,0)//Here first parameter represents length and second parameter represents character to be added
console.log(str);

//Object entries()->This returns all the key value pairs present in an Object.
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  
  let text = Object.entries(person);
  console.log(text);

//Object values()->This returns all the values present in an Object.
console.log(Object.values(person));

//async and await