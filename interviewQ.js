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



//map filter ,reduce

let students = [
    {name:"Rahul",roll:10,marks:80},
    {name:"Rahul",roll:10,marks:69},
    {name:"Rahul",roll:10,marks:35},
    {name:"Rahul",roll:10,marks:55}

]
//Q :- return total marks for student with marks greater than 60 after added 20 marks have been to those who scored less than 60

const totalMarks = students.map((st)=>{
    if(st.marks<60){
        st.marks+=20;
    }
    return st;
}).reduce((acc,curr)=>{
    if(curr.marks>60){
        acc+=curr.marks;
    }
    return acc;
},0)

console.log("sum ",totalMarks)