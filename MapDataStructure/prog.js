//Creating Map Object using new map().

let costOfItems=new Map([
    ["Biscuits",5],
    ["Chocolates",5],
    ["Chips",10]
])

//Creating Map Object using set().

let fruits=new Map()
fruits.set("Apples",100)
fruits.set("Pomegranate",100)
fruits.set("Orange",70)
fruits.set("CustardApple",100)

//getting value of the key using get()

console.log(fruits.get("Orange"));
console.log(costOfItems.get("Biscuits"));

//clear all the entries present in the Map Object.

costOfItems.clear()

//to delete a particular entry from the Map Object.

fruits.delete("Pomegranate")

//to check whether the given key is present or not

console.log(costOfItems.has("Biscuits"));
console.log(fruits.has("Pomegranate"));
console.log(fruits.has("Orange"));

//to get all the entries present in the Map.

console.log(fruits.entries());
console.log(costOfItems.entries());

//to get all the keys present in the Map Object.

console.log(fruits.keys());

//to get all the entries in order we use for-each.

fruits .forEach((entries,keys)=>{
    console.log(keys,"  ----> ",entries);
})

//to get all the values present in order we use values.

console.log(fruits.values());

//to get the size of Map Object.

console.log(fruits.size());
console.log(costOfItems.size());
