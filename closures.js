// var b =15
// function x(){
//     var a=7;
//     function y(b){
//         console.log(a,b);
//     }
//     y(b)
// }
// x();
// b = 20;
// x();

// set timeOut

function x(){
    function close(a){
        setTimeout(function (){
            console.log(a);
        },a*1000)
    }
   for(var i=1;i<=5;i++){
   close(i)
   }
    console.log("Rahul")
}

x();
