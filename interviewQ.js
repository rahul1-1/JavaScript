// function outer(b){
//     // var a =10;
//     function inner(){
//         console.log(a,b);
//     }
//     var a =10;
//     return inner;
// }
// outer(20)();


// function outest(){
//     var c = 30;
//     function outer(b){
//         // var a =10;
//         function inner(){
//             console.log(a,b,c);
//         }
//         var a =10;
//         return inner;
//     }
//     return outer;
// }
// let a =100;
// outest()(20)()



//data hiding Encapsulation


// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1();
// counter1();
// var counter2 = counter();
// counter2();

