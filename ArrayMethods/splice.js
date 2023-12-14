let arr=[0,1,2,3,4,5,6,7,8,9]
// console.log(arr.splice(2));//[2,3,4,5,6,7,8,9]
// console.log(arr);

let arr1=[0,1,2,3,4,5,6,7,8,9]
console.log(arr1.splice(2,2));//[2,3]
// console.log(arr1);

let arr2=[0,1,2,3,4,5,6,7,8,9]
console.log(arr2.splice(2,3,10,11));//[2,3,4]
// console.log(arr2);

//When we use splice() method without passing any arguments it doesn't change anything.

//When we use splice(index) method with 1 argument it removes the elements present in the array from that position.

//When we use splice(index,no.of elements) method with 2 arguments it removes the specifed no.of elements from that index position.

//When we use splice(index,no.of elements, elements to be inserted) method with more than 2 arguments it removes the specified no.of elements from that position and adds the elements that are to be inserted from that same index position.