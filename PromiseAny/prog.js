let p1=()=>{
    return new Promise((resolve,reject)=>{
        reject("Data is reject from p1")
    })
}

let p2=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Data is resolved from p2")
    })
}

Promise.any([p1(),p2()]).then((resolve)=>{
    console.log("resolved-----",resolve);
}).catch((reject)=>{
    console.log("Error occured--------",reject);
})


let p3=()=>{
    return new Promise((resolve,reject)=>{
        reject("Data is rejected from p3")
    })
}

let p4=()=>{
    return new Promise((resolve,reject)=>{
        reject("Data is rejected from p4")
    })
}

Promise.any([p3(),p4()]).then((resolve)=>{
    console.log("resolved-----",resolve);
}).catch((reject)=>{
    console.log("Error occured--------",reject);
})