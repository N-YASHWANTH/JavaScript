let p1=()=>{
    return new Promise((resolve,reject)=>{
        reject("Data is rejected from p1")
    })
}

let p2=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Data is resolved from p2")
    })
}

Promise.race([p1(),p2()]).then((resolve)=>{
    console.log("resolved-----",resolve);
}).catch((reject)=>{
    console.log("Error occured--------",reject);
})


let p3=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Data is resolved from p3")
    })
}

let p4=()=>{
    return new Promise((resolve,reject)=>{
        reject("Data is rejected from p4")
    })
}

Promise.race([p3(),p4()]).then((resolve)=>{
    console.log("resolved-----",resolve);
}).catch((reject)=>{
    console.log("Error occured--------",reject);
})

let p5=()=>{
    return new Promise((resolve,reject)=>{
        reject("Data is rejected from p5")
    })
}

let p6=()=>{
    return new Promise((resolve,reject)=>{
        rejected("Data is rejected from p6")
    })
}

Promise.race([p5(),p6()]).then((resolve)=>{
    console.log("resolved-----",resolve);
}).catch((reject)=>{
    console.log("Error occured--------",reject);
})