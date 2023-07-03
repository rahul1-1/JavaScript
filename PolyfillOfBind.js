let name = {
    firstName:"Rahul",
    lastName:"Choudhary",
}

function printName(city,state){
    console.log(this.firstName + " " + this.lastName + " from " + city + " " + state);
}


// call method
// printName.call(name,"Jaipur" ,"Rajsthan");


// apply method 

// printName.apply(name,['Jaipur','Rajsthan'])


//Bind method
let printMyName = printName.bind(name,"Jaipur" ,"Rajsthan")
printMyName();


// polyfill of bind method


function printNameBind(city, state,country){
    console.log(this.firstName + " " + this.lastName + " from " + city + " "+state + " " + country);
}

Function.prototype.mybind = function(...args){
    let fun = this
    let params = args.slice(1);
    return function (...args1) {
        fun.apply(args[0],[...params, ...args1]);
    }
}


let printMyName2 = printNameBind.mybind(name, "Jaipur", "Rajsthan")
printMyName2("India")