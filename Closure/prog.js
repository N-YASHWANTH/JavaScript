let a=10
function func(){
    function display(){
        console.log(a);
    }
    return display
}
let f = func()
f()


function fun(){
    let b=20;
    function disp(){
        console.log(b);
    }
    disp()
}
fun()