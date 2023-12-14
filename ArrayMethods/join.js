let arr=["Hii","Hello","How are you?"]
console.log(arr.join());//Hii,Hello,How are you?

// join() method works similar to toString() when no argument is passed.

//If we pass any "parameter" then that value will be added between 2 elements.
console.log(arr.join(" "));//Hii Hello How are you?
console.log(arr.join("*"));//Hii*Hello*How are you?
console.log(arr.join("+"));//Hii+Hello+How are you?
console.log(arr.join("!!"));//Hii!!Hello!!How are you?