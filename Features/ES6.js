//New Features in ES6

//The let and const keyword
let a=10;
console.log(a);

const c=20;
console.log(c);

//Arrow Functions
let func=(a,b)=>a+b;
sum=func(10,20)
console.log(sum);

//The ... Operator(Spread opereator)
let numbers = [23,55,21,87,56];
let max = Math.max(...numbers);
console.log(max);

//For/of
sum=0
for(i of numbers){
    sum=sum+i
}
console.log(sum);

//Promises
let prom=new Promise((resolve,reject)=>{
    b=true
    if(b==true){
        resolve("It is resolved")
    }
    else{
        reject("It is rejected")
    }
})

prom.then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
})

//Default Parameters
diff=(a=10,b=20)=>b-a
console.log(diff());

//String.includes()
str="Hello World!"
console.log(str.includes("Hello"));

//String.startsWith()
console.log(str.startsWith("Hello"));

//String.endsWith()
console.log(str.endsWith("Hello"));

//Array.from()
console.log(Array.from(str));

//Array keys()
keys=numbers.keys()
for (let j of keys) {
    console.log(j+ " ");
}

//New Math Methods

//Math.trunc(x)->returns the integer part of x:

Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4

//Math.sign(x)->returns if x is negative, null or positive:

Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1

//Math.cbrt(x)->returns the cube root of x:

Math.cbrt(8);    // returns 2
Math.cbrt(64);    // returns 4
Math.cbrt(125);    // returns 5

//New Number Properties
//New Number Methods

//Number.isInteger()->returns true if the argument is an integer.

Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false

//Number.isSafeInteger()->returns true if the argument is a safe integer.

//Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).

Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false