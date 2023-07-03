// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

// The general idea for debouncing is: 

// Start with 0 timeout 
// If the debounced function is called again, reset the timer to the specified delay 
// In case of timeout, call the debounced function Thus every call to a debounce function, resets the timer and delays the call

let count =0;
const getData = () =>{
    // call an api and gets data
    console.log("Fetching Data ...",++count);
}

const debounce = function (fn,d){
    let timer;
    return function(){
        let context = this
       let  args = arguments
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },d)
    }
}

const betterFunction = debounce(getData,300);