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
