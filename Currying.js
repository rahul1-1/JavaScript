// two way 
    // 1 Bind method
    // 2 Closures


// let multiply = function(x,y){
//     console.log(x*y);
// }


    // Using Bind method //

let multiplyByTwo = multiply.bind(this,2);
// let multiplyByTwo = multiply.bind(this,2,4); // 8  x=2 ,y=4

multiplyByTwo(5,9); //  when multiply.bind(this) than retsult 45 otherwise 2*5 = 10;

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(8) //24


   // Using Closures method //

function multiply(x){
    return function (y){
        console.log(x*y);
    }
}

let mulBy2 = multiply(2);
mulBy2(8) // 16
let mulBy3 = multiply(3);
mulBy3(8)// 24