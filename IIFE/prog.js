//IIFE -> Immediate Invoke Function Expression

//Here in this example we cannot get the output because it is eligible in local scope
//(function(x,y,z){
//     return x+y+z;
// })
// sum=(10,20,30)
// console.log(sum);

(function(x,y,z){
    console.log(x+y+z);
})
(10,20,30);
