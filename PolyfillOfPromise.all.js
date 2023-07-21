// console.log("start");

// function A(name, cb) {
//   setTimeout(() => {
//     cb(`hey! ${name}`);
//   }, 0);
// }

// function B(cb) {
//   setTimeout(() => {
//     cb("B");
//   }, 3000);
// }

// function C(cb) {
//   setTimeout(() => {
//     cb("C");
//   }, 2000);
// }

// function D(cb) {
//   setTimeout(() => {
//     cb("D");
//   }, 1000);
// }

// A("Rahul", function (msg) {
//   console.log(msg);
//   B(function (msg) {
//     console.log(msg);
//     C(function (msg) {
//       console.log(msg);
//       D(function (msg) {
//         console.log(msg);
//       });
//     });
//   });
// }); // callback Hell // output:- // start end hey! Rahul B C D

// function A() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("A");
//     }, 1000);
//   });
// }

// function B() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("B");
//     }, 1000);
//   });
// }

// function C() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   reject("C");
//     resolve("C")
//     }, 1000);
//   });
// }

// function D() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("D");
//     }, 1000);
//   });
// }

// A()
//   .then((res) => {
//     console.log(res);
//     return B();
//   })
//   .then((res) => {
//     console.log(res);
//     return C();
//   })
//   .then((res) => {
//     console.log(res);
//     return D();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// -------   using promise combinators --------


//1 Promise.all()

    // Promise.all([
    //     A(),
    //     B(),
    //     C(),
    //     D(),
    // ]).then((res)=>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log("error: failed" ,err)
    // })


//2 Promise.race() , 3 Promise.allSettled() , 4 Promise.any()


// // -----  Resolving Promises with async await -------- //

//     const res = async () =>{
//         try {
//             const msg1 = await A();
//             const msg2 = await B();
//             const msg3 = await C();
//             const msg4 = await D();
//             console.log({msg1,msg2,msg3,msg4})
//         } catch (error) {
//             console.log("Error");
//         }
//     }
// res();

// console.log("end");




// *----------------- Promise Polyfill -----------------------*


function PromisePolyFill(executor){
    let onResolve,
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;

    function resolve(val){
        isFulfilled = true;
        value = val
        if(typeof onResolve === "function"){
        onResolve(val);
        isCalled = true;
        }

    }

    function reject(val){
        isRejected = true;
        value = val
        if(typeof onReject === "function"){
        onReject (val);
        isCalled = true;
        }
    }

    this.then = function (cb){
        onResolve = cb;
        if(isFulfilled && !isCalled){
            isCalled = true;
            onResolve(value)
        }
        return this;
    };
    this.catch = function (cb){
        onReject = cb
        if(isRejected && !isCalled){
            isCalled = true;
            onReject(value)
        }
        return this;
    };

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

const examplePromise = new PromisePolyFill((resolve,reject)=>{
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

examplePromise
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
})


// ------------------- polyfill of promise.all() ---------------------

function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("A");
    }, 1000);
  });
}

function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("B");
    }, 1000);
  });
}

function C() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   reject("C");
    resolve("C")
    }, 1000);
  });
}

function D() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("D");
    }, 1000);
  });
}

Promise.allPolyFill = (promises) =>{
    return new Promise((resolve,reject)=>{
        const results= [];
        if(!promises.length){
            resolve(res);
            return ;
        };
        let pending = promises.length

        promises.forEach((promise,ind) => {
            Promise.resolve(promise).then((res)=>{
                results[ind]=res;
                pending--;
                if(pending === 0){
                    resolve(results);
                }
            }).catch((err)=>{
                reject(err)
            })
        });
    })
}

Promise.allPolyFill([
A(),
B(),
C(),
D(),
]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log("Error! ",err)
})


