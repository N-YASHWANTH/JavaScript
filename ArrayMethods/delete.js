let arr=[1,2,3,4,5]
delete arr[3]
console.log(arr.toString());//1,2,3,,5
console.log(arr[3]);//undefined

//If we delete a value from an array that position will be left blank.