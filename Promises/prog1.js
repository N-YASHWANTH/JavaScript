let prom=new Promise((pending,fulfilled)=>{
    capacity=5
    filledcapacity=2
    if(filledcapacity==capacity){
        fulfilled("It is fully filled")
    }
    else if(filledcapacity<capacity){
        pending("It is not fully filled")
    }
})

prom.then((pending)=>{
    console.log(pending);
}).catch((fulfilled)=>{
    console.log(fulfilled);
})