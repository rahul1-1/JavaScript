// Throttling is a similar technique to debouncing, but instead of delaying the execution of a function, it limits the rate at which a function. This is useful when a function, such as a mousemove or keydown event listener, may be called repeatedly but need not be run each time.

// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval. Throttling ensures that the function executes at regular intervals.


const btn = document.querySelector(".btn-1")

let t = 0;
function throttle(cb,d){
    let lastCall = 0;
    return function(...args){
        const now = new Date().getTime();
        if(now- lastCall < d){
            return  ;
        }
        lastCall = now;
       return cb(...args);
    }
}

const myThrottle = throttle(()=>{
    t+=1;
    console.log("click",t);
},900);


btn.addEventListener("click",()=>{
    myThrottle();
})