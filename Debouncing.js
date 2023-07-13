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
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },d)
    }
}

const betterFunction = debounce(getData,300);



// application of debouncing is in content-loading webpages like Facebook and Twitter where the user keeps on scrolling. In these scenarios, if the scroll event is fired too frequently, there might be a performance impact, as it contains lots of videos and images. Thus the scroll event must make use of debouncing.
// application of debouncing is in content-loading webpages like Facebook and Twitter where the user keeps on scrolling. In these scenarios, if the scroll event is fired too frequently, there might be a performance impact, as it contains lots of videos and images. Thus the scroll event must make use of debouncing.