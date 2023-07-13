

function myOnce(func){
    let ran ;
return function(){
    if(func){
        ran = func.apply(this,arguments);
        func = null;
    }
        return ran;
}
}

let hello = myOnce( function(){
    console.log("hello!")
})

hello();
hello();
hello();
hello();