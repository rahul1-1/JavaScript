// function outer(b){
//     // var a =10;
//     function inner(){
//         console.log(a,b);
//     }
//     var a =10;
//     return inner;
// }
// outer(20)(); // 10 20

// *************************************************************//


// function outest(){
//     var c = 30;
//     function outer(b){
//         // var a =10;
//         function inner(){
//             console.log(a,b,c);
//         }
//         var a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a =100;
// outest()(20)() // 10 20 30


// *************************************************************//


    // let a = 20;
    // {
    //     let a = 10;
    //     var b = 20;
    //     console.log(a); // 10 // shadowing
    //     console.log(b); //20
    // }
    // console.log(a); //20
    // console.log(b); // 20



// *************************************************************//

    // let a = 20;
    // {
    //     var a = 10;
    //     console.log(a); // illegal shadowing
    // }
    // console.log(a);

// *************************************************************//

    // var a = 5;

    // (function() {

    // console.log(a);

    // var a = 10;

    // })(); // undefined


// *************************************************************//


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

// *************************************************************//


//map filter ,reduce

// let students = [
//     {name:"Rahul",roll:10,marks:80},
//     {name:"Rahul",roll:10,marks:69},
//     {name:"Rahul",roll:10,marks:35},
//     {name:"Rahul",roll:10,marks:55}

// ]
//Q :- return total marks for student with marks greater than 60 after added 20 marks have been to those who scored less than 60

    // const totalMarks = students.map((st)=>{
    //     if(st.marks<60){
    //         st.marks+=20;
    //     }
    //     return st;
    // }).reduce((acc,curr)=>{
    //     if(curr.marks>60){
    //         acc+=curr.marks;
    //     }
    //     return acc;
    // },0)

    // console.log("sum ",totalMarks)

// *************************************************************//

//What is IIFE? // Immediately invoked function expression
    // (function square(num){
    //     console.log(num*num); //25
    // })(5)

    // (function(x){
    //     return (function (y){
    //         console.log(x); //1  it happens because of closure
    //     })(2);
    // })(1);


// *************************************************************//
// var x = 20;
// var fun = () =>{
//     console.log(x) //undefined 
//     var x = 55;
// }
// fun();

// *************************************************************//

    // function multiply(...nums){  // ...nums this is call rest opertor //params
    //     console.log(nums);
    // }
    // var arr = [5,6];


    // multiply(...arr); // ...arr this is call spread operator (...arr); //argument


// *************************************************************//

// /Arrow function vs Regular function

    // 1 - syntax

    // function sq(num){
    //     return num*num;
    // }
    // const sq = (num) =>{
    //     return num*num;
    // }



    // 2 - Implicit "return" keyword in arrow function

    // const sq = (num) => num*num;


    // 3 - arguments
    // function fn(){
    //     console.log(arguments); //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    // }  
    // fn(1,2,3)

    // //  but we can't do this with an arrow funtion, we don't have the arguments keyword inside of an arrow funtion


    //4 - this keyword 

    // let name = "Choudhary" 
    // let user = {
    //     name: "Rahul Choudhary",
    //     rc1:()=>{
    //         console.log(this.name) //  this here is pointing to  global object if we uncomment line 179 than output will be "Choudhary"
    //     },
    //     rc2(){
    //         console.log(this.name)// this here is pointing to user object
    //     }
    // }
    // user.rc1(); // undefined
    // user.rc2();  //Rahul Choudhary


// *************************************************************//

//  Q o/p

    // let cnt =5;
    // (function printCnt(){
    //     if(cnt === 5){
    //         let cnt = 10; 
    //         console.log(cnt) //10;
    //     }
    //     console.log(cnt) // 5

    // })()



// *************************************************************//


//  Q o/p

    // var cnt = 5;
    // (function printCnt(){
    //     if(cnt === 5){
    //         var cnt = 10; 
    //         console.log(cnt)
    //     }
    //     console.log(cnt); // undefined
    // })();



// *************************************************************//

// Q - write a funtion that would allow you to do this
//  addFive(10) //15
// addFive(25) //30

    // function createBase(num){
    //     return function (innerNum){
    //         console.log(innerNum + num);
    //     }
    // }

    // var addFive = createBase(5);
    // addFive(10) //15
    // addFive(25) //30


 // *************************************************************//


//  Q - Time Optimization


// function find(index){
//     let a = [];
//     for(let i=0 ;i< 1000000;i++){
//         a[i]=i*i;
//     }
//     console.log(a[index])
// }

// console.time("6");
// find(6);    // 36
// console.timeEnd("6"); // 6: 29.962890625 ms 
// console.time("12");  
// find(12);   // 144
// console.timeEnd("12");  //12: 33.3408203125 ms

        // Ans
        // function find(){
        //     let a = [];
        //     for(let i=0 ;i< 1000000;i++){
        //         a[i]=i*i;
        //     }
        //     return function (index){
        //     console.log(a[index])
        //     }
        // }
        // const closure = find()
        // console.time("6");
        // closure(6);    // 36
        // console.timeEnd("6"); //6: 0.2900390625 ms
        // console.time("12");  
        // closure(12);   // 144
        // console.timeEnd("12");  // 12: 0.0419921875 ms

 // *************************************************************//


//  Q - Implement Caching / Memoize function

    // function myMemoize(fn,context){
    //     const res = {};
    //     return function(...args){
    //         var argsCache = JSON.stringify(args);
    //         if(!res[argsCache]){
    //             res[argsCache] = fn.call(context || this , ...args);
    //         }
    //         return res[argsCache];
    //     }
    // }
    // const product = (num1,num2) =>{
    //     for(let i =0 ;i<=100000000; i++){};
    //     return num1*num2;
    // }
    // const memoizedProduct = myMemoize(product);

    // console.time("First Call")
    // console.log(product(125,125)); //15625
    // console.timeEnd("First Call") //First Call: 110.712890625 ms
    // console.time("Second Call")
    // console.log(product(125,125)); //15625
    // console.timeEnd("Second Call") //Second Call: 112.345947265625 ms

    // console.log("")
    // console.log("")
    // // ************ After memoizations ******************//

    // console.time("First Call")
    // console.log(memoizedProduct(125,125)); //15625
    // console.timeEnd("First Call") //First Call: 110.712890625 ms
    // console.time("Second Call")
    // console.log(memoizedProduct(125,125)); //15625
    // console.timeEnd("Second Call") //Second Call: 0.072021484375  ms


 // *************************************************************//



// Q - Currying :- curring is a funtion that takes one argument at a time and return a new funtion expecting the next argument it is a conversion of funtions from callable as this f(a,b) into callable as this f(a)(b);

// Following are the reasons why currying is good :

// ✅ It makes a function pure which makes it expose to less errors and side effects.

// ✅ It helps in avoiding the same variable again and again.

// ✅ It is a checking method that checks if you have all the things before you proceed.

// ✅ It divides one function into multiple functions so that one handles one set of responsibility.

 // *************************************************************//

 // Q - sum(2)(6)(7);

    // const sum = (x)=>{
    //     return (y)=>{
    //         return (z) =>{
    //             console.log(x+y+z);
    //         }
    //     }
    // }
    // sum(2)(6)(7)

 // *************************************************************//


//Q - do operation basis on the first argument "operation"
    
    // function evaluate(operation) {
    //     return (a) => {
    //         return (b) => {
    //                     if(operation === "sum")
    //                      return a + b;
    //                     else if(operation === "multiply")
    //                     return a * b;
    //                     else if(operation === "divide")
    //                     return a / b;
    //                     else if(operation === "subtract")
    //                     return a - b;
    //                     else return "No / Invalid Operation Selected"
    //         }
    //     }
    // }
    
    // console.log(evaluate("sum")(5)(5))


 // *************************************************************//


//Q - Infinite Currying

    // function add(a){
    //     return function(b){
    //         if(b) return add(a+b);
    //         return a;
    //     }
    // }

    // console.log(add(5)(2)(4)(5)(8)());



 // *************************************************************//

 //Q - Currying vs Partial Application
    //  partial application transform a function into another funtion with small arity(arity just means  the number of the arguments a funtion receives)
    // function sum(a){
    //     return function(b,c){
    //         return a+b+c;
    //     };
    // }
    // const x = sum(10);
    // console.log(x(5,6));
    // console.log(sum(20)(15,25))


 // *************************************************************//

 //Q - Manipulating DOM

//  function updateElementText(id){
//     return function(content){
//         document.querySelector('#'+id).textContent = content;
//     };
//  }
//  const updateHeader = updateElementText("heading");
//  updateHeader("Rahul Choudhary")


 // *************************************************************//


 //Q - curry() implementation
 // converts f(a,b,c) into f(a)(b)(c)

    // function curry(func){
    //     return function curriedFunc(...args){
    //     console.log(args, " - ",func)
    //         if(args.length>=func.length){
    //             return func(...args);
    //         } else{
    //         return function (...next){
    //             return curriedFunc(...args, ...next);
    //         }
    //         }
    //     }
    // }

    // const sum = (a,b,c,d,e) => a+b+c+d+e;

    // const totalSum = curry(sum);
    // console.log(totalSum(1)(2)(3)(4)(5))


 // *************************************************************//

 //Q - o/p
    // const fun = ( function (x){
    //     delete x;
    //     return x;
    // })(5);
    
    // console.log(fun) // 5 x is a local variable. delete keyword is only used when we want to delete properties from a object and not a local variable so this is not affect "x" at all. and its going to return "5"

 // *************************************************************//

 //Q how to use key in object like thiS: like this video:
    // const user = {
    //     name: "Rahul Choudhary",
    //     age: 24,
    //     "like this video":true
    // };

    // console.log(user.name)
    // console.log(user["like this video"]);

 // *************************************************************//

//Q 
    //  const property = "firstName";
    // const name = "Rahul Choudhary";
    // const user = {
    //     [property] :name
    // }
    // console.log(user) //{firstName: 'Rahul Choudhary'}
    // console.log(user.firstName) //Rahul Choudhary


 // *************************************************************//


 //Q Iterate through an Object

    // const user = {
    //     name:"Rahul Choudhary",
    //     age : 24,
    //     isTotallAwesome : true,
    // }

    // for(key in user){
    //     console.log(user[key]) // Rahul Choudhary 24 true
    // }

 // *************************************************************//

 // Q - o/p

    // const obj = {
    //     a: "One",
    //     b: "two",
    //     a: "three",
    // }

    // console.log(obj) //{a: 'three', b: 'two'}


 // *************************************************************//


 //Q Create a funtion multiplyByTwo(obj) that multuplies all numeric property value of nums by 2
    // let nums = {
    //     a:100,
    //     b:200,
    //     title:"My nums",
    // }
    // multiplyByTwo(nums);

    // function multiplyByTwo(obj){
    //     for(key in obj){
    //         if(typeof obj[key] === "number")
    //         {
    //             obj[key]*=2
    //         }
    //     }
    // }
    // console.log(nums) //{a: 200, b: 400, title: 'My nums'}



 // *************************************************************//

 //Q - o/p
    // const a = {};
    // const b = {key: "b"};
    // const c = {key: "c"}

    // a[b] = 123;
    // a[c] = 456;

    // console.log(a[b]); //456
    // console.log(a)
    // Object cannot be converted into a key unless it's a string so when it tries to convert it into a string it becomes "[object object]". So basically both of there act as 
    // a[b] = a["[object object]"] 
    // a[c] = a["[object object]"] 


 // *************************************************************//

//  Q what's JSON.stringify and JSON.parse?

    // const user = {
    //     name: 'Rahul',
    //     age: 24,
    // };

    // const strObj = JSON.stringify(user); //convert obj as a string 
    // console.log(strObj) //{"name":"Rahul","age":24}

    // console.log(strObj.name) //undefined

    // console.log(JSON.parse(strObj)) // {name: 'Rahul', age: 24} //convert back to object

    //Q where we can use these things 
     // most common use case for this is storing it in our local storage


 // *************************************************************//

 //Q - o/p
    // console.log([...'Rahul']) //['R', 'a', 'h', 'u', 'l']

    // const user = {name:"Rahul",age:24};
    // const admin = {admin:true, ...user};
    // console.log(admin) //{admin: true, name: 'Rahul', age: 24}

    // const setting = {
    //     username:"Rahul",
    //     level:19,
    //     health:91,
    // };
    // const data = JSON.stringify(setting, ["level","health"]);
    // console.log(data) //{"level":19,"health":91} // it only stringified both level , health properties

 // *************************************************************//

 //Q - o/p
    // const shape = {
    //     radius :10,
    //     diameter(){
    //         return this.radius * 2;
    //     },
    //     perimeter:()=> 2*Math.PI * this.radius // here this is pointing to the window object (arrow function)
        

    // }

    // console.log(shape.diameter()); // 20
    // console.log(shape.perimeter()); //NaN


 // *************************************************************//

    // const user = {
    //     name:"Rahul",
    //     age:24,
    //     fullName:{
    //         first:"Rahul",
    //         last:"Choudhary",
    //     }
    // };
    // const { name } = user
    // const {name:MyName} = user // rename name destructured value
    // console.log(name) //Rahul 
    // console.log(MyName) //Rahul
    
    // const {fullName} = user
    // console.log(fullName) //{first: 'Rahul', last: 'Choudhary'}
    // const { fullName: { first } } = user
    // console.log(first) // Rahul


 // *************************************************************//

    //💡 Note:- Rest parameter (...args) must be last in the parameters list. rest parameter can't exits in the middle they always supposed to be the last in the parameters list . 💡spread operators can be used in between


 // *************************************************************//

 //Q - o/p
    //  let c = {greeting:"Hey"};
    //  let d;
    //  d = c;
    //  c.greeting = "Hello";
    //  console.log(d.greeting); //Hello

     //💡 Note:- when we try to assign one onject to another we are not copying all of the properties of one oject to the other object. we just simply provide the reference to this object  to this variable

        // let x= 10;
        // let y;
        // y=x;
        // x=20;
        // console.log(y) //10



// *************************************************************//


//Q - o/p
        // console.log({ a: 1} == {a: 1}) // false;
        // console.log({a: 1} === {a: 1}) // false

        // because both  of them are different objects over here and both have different space in the memory and object are only equal when they are referencing a particular area in the memory




// *************************************************************//


//Q - O/P
    // let person = {name: "Rahul"};
    // const members = [person];
    //  person = null;
    // onsole.log(members)      // {name: 'Rahul'}  provided this person valuse to this members array what we're doing is we're basically providing this person to member[0]  so this will not affect this place over since we are modifying the complete variable and not the properties inside of this.


    // the person variable is reassigned to null, which means it no longer refers to the person object. However, the members array still holds a reference to the original person object.

    //💡💡💡 Note that assigning null to a variable does not delete the object or value itself; it just means that the variable no longer holds a reference to it. The object that was previously assigned to person will still exist in memory as long as there are other references to it (such as the one held by the members array in your code).
    
    // person.name = null; 
    // console.log(members) //{name: null}

// *************************************************************//

// Q - O/P

    // const value = {number: 10};

    // const multiply = (x = {...value}) =>{
    //     console.log((x.number *=2));
    // }

    // multiply();                             //20
    // multiply();                             //20
    // console.log("number ",value.number)     //number  10
    // multiply(value);                        //20
    // console.log("number ",value.number)     //number  20
    // multiply(value);                        // 40
    // console.log("number ",value.number)     //number  40
    // multiply();                             // 80
    // console.log("number ",value.number)     //number  40
    // multiply(value); // 80

    // // x = {...value} default value since we doing this spread operator over here what this will do is this will not give it the reference to original object. it will simply clone the object .when we pass "value" object in function call than it will not take default value .it will take "value" with the reference


// *************************************************************//


// //Q - o/p
//     function changeAgeAndReference(person){
//         person.age = 25,
//         person = {
//             name:"Rahul",
//             age: 50,
//         };
//         return person;
//     }

//     const personObj1 = {
//         name: "Alex",
//         age:30,
//     };

//     const personObj2 = changeAgeAndReference(personObj1);

//     console.log(personObj1) // {name: 'Alex', age: 25}
//     console.log(personObj2) // {name: 'Rahul', age: 50}

//     //Note: When an object is passed as an argument to a function, the function receives a reference to that object. Modifying the properties of the object inside the function affects the original object outside the function. However, reassigning the object to a new value inside the function does not affect the original reference outside the function.


// *************************************************************//



 // Q - Difference between shallow copy vs deep copy.

    //  A shallow copy means that certain (sub-)values are still connected to the original variable.

    // const user={
    //     name: 'Jen',
    //     age: 26
    // };
    
    // const copyOfUser = user;
    // console.log(user, 'user'); //{ name: 'Jen', age: 26 } user
    
    // console.log('------------After Modification-----------');
    // copyOfUser.age = 24;
    // /*
    // Here you would expect user object wouldn't change, but copyOfUser 
    // and user object both share same memory address
    // */
    // console.log(user, 'user');// ------------After Modification----------- { name: 'Jen', age: 24 } user



    // A deep copy means that all of the values of the new variable are copied and disconnected from the original variable


    // const user = {
    //     name: "Jen",
    //     age: 26
    // }
    // console.log("=========Deep Copy========");
    // const copyOfUser = JSON.parse(JSON.stringify(user));
    // console.log("User=> ",user);
    // console.log("copyOfUser=> ", copyOfUser);
    // /*
    // =========Deep Copy========
    // User=>  { name: 'Jen', age: 26 }
    // copyOfUser=>  { name: 'Jen', age: 26 }
    // */
    // console.log("---------After modification---------");
    // copyOfUser.name = "Piyush";
    // copyOfUser.age = 24;
    // /*
    // Here user object will not change
    // */
    // console.log("User=> ",user);
    // console.log("copyOfUser=> ",copyOfUser);
    // /*
    // ---------After modification---------
    // user=>  { name: 'Jen', age: 26 }
    // copyOfUser=>  { name: 'Piyush', age: 24 }
    // */
   
  
// *************************************************************//


// **Q - How to clone an object without referencing its keys to original object? **

// Solution
// 3 ways to clone an object 👇🏻


// const obj = {a: 1 ,b: 2}
// const objclone = Object.assign({},obj);
// const objclone = JSON.parse(JSON.stringify(employee));
// const objclone = { ...obj }


// *************************************************************//

//Q - o/p
    // const user = {
    //     name: "Rahul Choudhary",

    //     getName(){
    //         const name = "Rahul";
            
    //         return this; // 💡here this will pointing to user object not getName funtion
    //     }
    // }

    // console.log(user.getName()); // Rahul Choudhary 



// *************************************************************//


    // let user = {
    //     name: "Rahul",
    //     age: 24,
    //       childObj:{
    //           newName:"Rahul Coudhary",
    //           getDetails() {
    //               console.log(this.newName, "and" ,this.name);
    //           }
    //       }
    //   };
    //   user.childObj.getDetails(); // Rahul Coudhary and undefined



// *************************************************************//


// //Q - What if the same functions are arrow functions inside the object?

   
    // let user = {
    // name: "Rahul",
    // age: 24,
    //     getDetails: () => {
    //         console.log(this.name); 
    //     }
    // };

    // user.getDetails() // it is empty since it points to window object.



// *************************************************************//


// // Q - What is the result of accessing its ref? Why?

// function makeUser() {
//     return {
//       fname: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   console.log( user.ref.fname); // undefined because when we are calling makeUser() function the parent object is the window object. so makeUser() pointing to the window object




//         Follow up -
//         How do u make it work?
    
//         to fix this we can do over here is instead of assiging "this" directly to "ref" what we can do is we can make this "ref" a funtion so that this funtion can point to  object 
    
//         code 

//         function makeUser(){
//             return {
//                 name:"Rahul",
//                 ref(){
//                     return this
//                 }
//             }
//         }

//         let user = makeUser();
//         console.log(user.ref().name) // Rahul


// *************************************************************//



// Q - o/p

    // const user = {
    //     fName: "Rohan Choudhary",
    //     logMessage(){
    //         console.log(this.fName);
    //     }
    // }
    // setTimeout(user.logMessage(),3000); // Rohan Choudhary




// *************************************************************//


// Q - o/p

    // const user = {
    //     fName: "Rahul",
    //     greet() {
    //         return `Hello, ${this.fName}`;
    //     },
    //     farewell: () =>{
    //         return `Goodbye, ${this.fName}`; // here this will point parent object ( window) because of arrow funtion 
    //     }
    // }

    // console.log(user.greet()); //Hello, Rahul
    // console.log(user.farewell()); //Goodbye, undefined
  



// *************************************************************//
 

// Q - Create an object calculator

        // let calculator = {
        //     read(){
        //         this.a = +prompt("a = ",0);
        //         this.b = +prompt("b = ",0);
        //     },
        //     sum(){
        //         return this.a + this.b;
        //     },
        //     mul(){
        //         return this.a*this.b;
        //     }
        // };

        // calculator.read();
        // console.log(calculator.sum()); 
        // console.log(calculator.mul()); 





// *************************************************************//



//Q - o/p

        // var length = 10 ;

        // function callback(){
        //     console.log(this.length);
        // }

        // const obj = {
        //     length: 15,
        //     method(func){
        //         func();
        //     },
        // };

        // obj.method(callback) // 10 

        // // this method "meethod" will target to "obj" object but since func() is called inside in "obj" object . so this will not target to this "obj" object this will target to global object (window)

        // ----------------if modify above code ---------------- 

        // var length = 10 ;

        // function callback(){
        //     console.log(this.length);
        // }

        // const obj = {
        //     length: 15,
        //     method(){
        //         arguments[0](); // this arguments keyword takes all of these params that are being sent to method() function as an array so arguments[0] is "callback()" function
        //         // arguments = [callback,3,5,10] this array in itself is an object so when we call callback here this will target to its parent object so what is its parent object is arguments array . if we check prototype of an array it has property called is length so length of array (4) is logged
        //     },
        // };

        // obj.method(callback,3,5,10) // 4 


        


// *************************************************************//


//Q - Implement this code 
    // const result = calc.add(10).multiply(5).subtract(30).add(10);

    // const calc = {
    //     total:0,
    //     add(a) {
    //         this.total+=a;
    //         return this
    //     },
    //     multiply(a) {
    //         this.total*=a;
    //         return this;
    //     },
    //     subtract(a) {
    //         this.total-=a;
    //         return this
    //     },
    // };

    //  const result = calc.add(10).multiply(5).subtract(30).add(10);

    // console.log(result.total); // 30




// *************************************************************//


//Q -o/p
    // console.log("start");
    //  const promise = new Promise((resolve,reject)=>{
    //     console.log(1);
    //     resolve(2);
    //  })

    //  promise.then((res)=>{
    //     console.log(res);
    //  })
    //  console.log("end");

     // start 1 end 2 


     // when promise is initialized its gonna find whatever synchronous  code is inside of callback function console.log(1) executed
     //the console.log(1) statement is a synchronous operation, so it is executed immediately when the code reaches that line


// *************************************************************//
    // Q - o/p

        // console.log("start");
        // const promise = new Promise((resolve,reject)=>{
        // console.log(1);
        // resolve(2);
        // console.log(3);
        // })

        // promise.then((res)=>{
        // console.log(res);
        // })
        // console.log("end");

        // //start 1 3 end 2

// *************************************************************//

// Q - o/p


        // console.log("start");
        // const promise = new Promise((resolve,reject)=>{
        // console.log(1);
        // console.log(3);
        // })

        // promise.then((res)=>{
        // console.log(res);
        // })
        // console.log("end");

        // //start 1 3 end 

        // //the promise doesn't resolve.  As a result, the callback function inside then is not executed.

// *************************************************************//


//  Q - O/P

        // console.log("start")

        // const func = ()=>
        //      new Promise((resolve,reject)=>{
        //         console.log(1);
        //         resolve(2);
        //     })
        

        // console.log("middle")

        // func().then((res)=>{
        //     console.log(res);
        // });

        // console.log("end");

        // // start middle 1 end 2


// *************************************************************//


// Q - o/p 

    // function job(){
    //     return new Promise(function(resolve,reject) {
    //         reject();
    //     })
    // }

    // let promise = job();

    // promise.then(()=>{
    //     console.log("Success 1")
    // })
    // .then(()=>{
    //     console.log("Success 2")
    // })
    // .then(()=>{
    //     console.log("Success 3")
    // })
    // .catch(()=>{
    //     console.log("Error")
    // })
    // .then(()=>{
    //     console.log("Success 4")
    // })

    // //Error Success 4

// *************************************************************//

//  Q    - O/P

    // function job(state){
    //     return new Promise((resolve,reject)=>{
    //         if(state){
    //             resolve("success");
    //         }
    //         else{
    //             reject("error");
    //         }
    //     })
    // }

    // let promise = job(true);

    // promise
    // .then((data)=>{
    //     console.log(data);  // success
    //     return job(false)
    // })
    // .catch(function (err){
    //     console.log(err);  //error

    //     return "Error caught";
    // })
    // .then(function(data){
    //     console.log(data); // Error caught
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })

    // //success error Error caught


// *************************************************************//

//Q - O/P 

        // function job(state){
        //     return new Promise((resolve,reject)=>{
        //         if(state){
        //             resolve("success");
        //         }
        //         else{
        //             reject("error");
        //         }
        //     })
        // }

        // let promise = job(true);

        // promise
        // .then(function (data){
        //     console.log(data);  //success
        //     return job(true);
        // })
        // .then(function(data){
        //     if(data !== "victort"){
        //         throw "Defeat";
        //     }
        //     return job(true)
        // })
        // .then(function (data){
        //     console.log(data)
        // })
        // .catch(function(error){
        //     console.log(error);  // Defeat
        //     return job(false)
        // })
        // .then(function (data){
        //     console.log(data);
        //     return job(true);
        // })
        // .catch(function(error){
        //     console.log(error); // error
        //     return "Error caught";  // returning a msg that means promise is resolved
        // })
        // .then(function (data){
        //     console.log(data); // Error caugth
        //     return new Error("test"); // Not Returning a promise
        // })
        // .then(function (data){
        //     console.log("success ", data.message); // success test
        // })
        // .catch((data)=>{
        //     console.log("Error ", data.message)
        // })

        //     // success
        //     // Defeat
        //     // error
        //     // Error caught
        //     // success test

// *************************************************************//

//Q - O/P

        // const person = {name: "Rahul"};

        // function sayHi(age){
        //     return `${this.name} is ${age}` ;
        // }

        // console.log(sayHi(24)); // is 24
       


// *************************************************************//

    // Q - o/p

        // const person = {name: "Rahul"};

        // function sayHi(age){
        //     return `${this.name} is ${age}` ;
        // }

        // console.log(sayHi.call(person,24)); //Rahul is 24
        // console.log(sayHi.bind(person,24)); //ƒ sayHi(age){ return `${this.name} is ${age}` ; }

// *************************************************************//


//  Q - o/p

        // var age = 10;

        // var person = {
        //     name: "Rahul",
        //     age : 20,
        //     getAge:  function(){
        //         return this.age;
        //     }
        // };

        // var person2 = {age : 24};
        // console.log(person.getAge.call(person2)); // 24
        // // if we use arrow funtion than output will be 10

// *************************************************************//


//Q - o/p

        // var status = "1";

        // setTimeout(()=>{
        //     const status = "2";
        //     const data = {
        //         status : "3",
        //         getStatus(){
        //             var status = "4"
        //             return this.status;
        //         },
        //     };
            
        //     console.log(data.getStatus()); //3
        //     console.log(data.getStatus.call(this)); //1
        // },0)

// *************************************************************//

    // const animals = [
    //     {species : "Lion", name : "King"},
    //     {species : "Whale", name : "Queen"},
    // ];
        
    // function printAnimals(i){
    //     this.print  = function(){
    //         console.log("#" + i + " "+ this.species + ": " + this.name);
    //     }
    //     this.print();
    // }

    // for(let i =0 ;i<animals.length ; i++){
    //     printAnimals.call(animals[i],i)
    // }

    //#0 Lion: King
    // #1 Whale: Queen


// *************************************************************//


//Q Append an array to another array


    // const a = ["a","b","c"];
    // const b = [1,2,3,4];
    // // console.log(a.concat(b)) // creating a new array 
    // // using for loop 
    // a.push.apply(a,b)
    // console.log(a) // ['a', 'b', 'c', 1, 2, 3, 4]

    // a.push.apply(a,a)
    // console.log(a)  // ['a', 'b', 'c', 1, 2, 3, 4, 'a', 'b', 'c', 1, 2, 3, 4]




// *************************************************************//

//Q Using apply to enhsnce Built -in functions

    // const nums = [2,3,6,1,5,0];
    
    // // console.log(Math.max(2,3,6,1,5,0)) //6
    // // console.log(Math.max())     // -Infinity
    // // console.log(Math.min())     // Infinity

    // // console.log(Math.min(nums))  //NaN

    // console.log(Math.min.apply(null,nums)) //0
    // console.log(Math.max.apply(null,nums)) //6



// *************************************************************//

//Q - o/p

    // function f() {
    //     console.log(this); //?
    // }
    // let user = {
    //     g : f.bind(null),
    // };
    // user.g() // window object


// *************************************************************//

//Q - o/p

    // function f(){
    //     console.log(this.name);
    // }
    // f = f.bind({name: "John"}).bind({name : "Ann"});
    // f(); // John   , once a function is  bind to a particular  object it will always to be bound  to that particular object, bind chaining doesn't exit

// *************************************************************//

    // console.log(+true) //1
    // console.log(typeof +true) //number
    // console.log(!"rahul") // false

// *************************************************************//


        // let a =3;
        // let b = new Number(3);
        // console.log(a == b) // true;
        // console.log(a === b) //false type of is object

// *************************************************************//

    // function getAge(...args){
    //     console.log(typeof args) // object;
    //     console.log(typeof []) // object;
    // }
    // getAge(18);


// *************************************************************//

    //   'use strict'
    //   a = 17;
    //   console.log(a) // Uncaught ReferenceError: a is not defined


// *************************************************************//

        // const obj = {1:"a",2:"b",3:"c","age":19};

        // console.log(obj.hasOwnProperty(1)); // true
        // console.log(obj.hasOwnProperty("1")); //true 
        // console.log(obj.hasOwnProperty("age")); //true
        // console.log(obj.hasOwnProperty(age)); // error

// *************************************************************//

    // function fun(){
    //     return ( () => 0)()
    // }
    // console.log( typeof fun()); // number

// *************************************************************//

      // function fun(){
    //     return ( () => 0)
    // }
    // console.log( typeof fun()); // function


// *************************************************************//


    // // const nums = [1,2,3,4];
    // // nums[12]=12; 
    // // console.log(nums) // [1, 2, 3, 4, empty × 8, 12]
    // console.log(1 + 4 +'5')//55
    // console.log(1 + 2 + +'3')//6
    // console.log(typeof 1 + 2 + +'3')// number23

// *************************************************************//

    // let a = [];
    // let b = [];
    //  console.log(a == b); //false
    //  console.log(a === b); // false

// *************************************************************//

    // let a = [];
    // let b = a;
    // console.log(a == b); //true
    // console.log(a === b); // true


// *************************************************************//

        // let a = [5];
        // let b = [5];
        // console.log(a[0] == b[0]); //true
        // console.log(a[40] == b[44]); //true
        // console.log(a[40] === b[45]); //true
        // console.log(a[0] === b[0]); // true

// *************************************************************//

    // console.log(typeof NaN) // number
    // console.log(5 - - 5);//10

// *************************************************************//

    // let data = {name:"Rahul"};
    // console.log(delete data.name) //true
    // console.log(delete data.age) //true
    // console.log(delete data) //false

    // //In JavaScript, the delete operator is used to delete properties from objects, but it cannot be used to delete variables or identifiers. Since data is a variable, not a property of an object, the delete operator cannot delete it.

    // //he second console.log statement attempts to delete the age property of the data object. However, the age property does not exist in the data object. In this case, the delete operation is still considered successful, and it returns true. Since there was no age property to delete, the data object remains unchanged.

// *************************************************************//

    // const data = ['abc','bcd','cde'];
    // const [x] = data
    // const[y,,z] = data;
    // console.log(x); //abc
    // console.log(y);//abc
    // console.log(z);//cde
    

// *************************************************************//

    // let data = [] || 0 ||true;
    // console.log(data) //[];
    // data = null || false || {} ||[]
    // console.log(data); //{}
    // data = null || false 
    // console.log(data); //false

// *************************************************************//


// console.log(Promise.resolve(5)) //Promise {<fulfilled>: 5}
// console.log(Promise.reject(5)) //Promise {<rejected>: 5}

// *************************************************************//

// console.log("😍" === "😍") //true //Unicode emojis are compered
// console.log("😍" === "😊") //false


// *************************************************************//


    // let arr = ["a","b","c","d"];
    // delete arr[1];
    // console.log(arr);  //['a', empty, 'c', 'd']
    // console.log(arr.length); //4
    // console.log(4 ** 4) //256

// *************************************************************//

    // let a =1;
    // setTimeout(function(){
    //     console.log(a); //20
    // })

    // a=20


// *************************************************************//




