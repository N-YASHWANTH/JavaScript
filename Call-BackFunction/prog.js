let num1=()=>{return 10}
let num2=()=>{return 20}

let sum=(a,b)=>{return a()+b()}

let res=sum(num1,num2)
console.log(res);

//Here a and b are CallBackFunctions as they are passed as argument to other function.