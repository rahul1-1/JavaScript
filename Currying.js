//Currying in JavaScript is a process in functional programming in which you can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline
// two way 
    // 1 Bind method
    // 2 Closures


// let multiply = function(x,y){
//     console.log(x*y);
// }


    // Using Bind method //

// let multiplyByTwo = multiply.bind(this,2);
// let multiplyByTwo = multiply.bind(this,2,4); // 8  x=2 ,y=4

// multiplyByTwo(5,9); //  when multiply.bind(this) than retsult 45 otherwise 2*5 = 10;

// let multiplyByThree = multiply.bind(this,3);
// multiplyByThree(8) //24


   // -----------------------Using Closures method ---------- //

// function multiply(x){
//     return function (y){
//         console.log(x*y);
//     }
// }

// let mulBy2 = multiply(2);
// mulBy2(8) // 16
// let mulBy3 = multiply(3);
// mulBy3(8)// 24


//**************************************************************** */

// Infinite Currying

    // function add(a){
    //     return function(b){
    //         if(b) return add(a+b);
    //         return a;
    //     }
    // }

    // console.log(add(5)(2)(4)(5)(8)());

//**************************************************************** */

    // converts f(a,b,c) into f(a)(b)(c)
   
    //    function curry(func){
        
    //        return function curriedFunc(...args){
    //      //console.log(args, " - ",func)
    //      // func.length =  number of arguments the function expects to receive.
    //            if(args.length>=func.length){
    //                return func(...args);
    //            } else{
    //            return function (...next){
    //                return curriedFunc(...args, ...next);
    //            }
    //            }
    //        }
    //    }
   
    //    const sum = (a,b,c,d,e) => a+b+c+d+e;
   
    //    const totalSum = curry(sum);
    //    console.log(totalSum(1)(2)(3)(4)(5))




    //**************************************************************** */


// //      Q   
//           // sum(1)(2)(3)(4)(5) //15
//           // sum(1,2)(3)(4)(5) //15
//           // sum(1,2,3)(4)(5) //15
//           // sum(1,2)(3)(4,5) //15
//           // sum (1,2,3,4,5)  //15

//           function curry(fn, ...args){
//             if(args.length >= fn.length){
//                 return fn(...args)
//             } else {
//                 return function (...nextArgs){
//                     return curry(fn, ...args,...nextArgs);
//                 };
//             }
//           }

//            sumFiveNumber = (a,b,c,d,e) => a+b+c+d+e;
//            const sum = curry(sumFiveNumber)

//           console.log(sum(1)(2)(3)(4)(5)) //15
//           console.log(sum(1,2)(3)(4)(5)) //15
//           console.log(sum(1,2,3)(4)(5) )//15
//           console.log(sum(1,2)(3)(4,5) )//15
//           console.log(sum (1,2,3,4,5)  )//15

//   *************************************************************

//  Q write a curry function that return sum of pervious value
 
const curryFn = () =>{
    let preSum = 0;
    return (val = 0) =>{
        preSum +=val;
        return preSum;
    }
}

const sum = curryFn();

console.log(sum(5)) //5
console.log(sum(4))  //9
console.log(sum(6)) //15
console.log(sum(10)) //25
console.log(sum()) //25
console.log(sum(10)) //35
console.log(sum()) //35