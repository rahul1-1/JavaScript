const inputs = document.querySelector(".inputs__container")
const errorMessage = document.getElementById("error-message");
let err=false;
inputs.addEventListener("input",function(e){
    let target = e.target
    let val = target.value

    if(isNaN(val)){
        target.value = ""
        err = true;
        errorMessage.textContent = "Please enter a number.";
        errorMessage.style.color = "red";
        return;
    }
    if(val!= ""){
        err = false
        const next = target.nextElementSibling;
        if(next){
            next.focus();
        }
    }
    if(!err) {
        errorMessage.textContent = ""; // Clear error message if input is valid
      }
});


inputs.addEventListener("keyup",function(e){
    const target = e.target;
    const key = e.key.toLowerCase();

    if(key == "backspace" || key == "delete"){
        target.value="";
        const prev = target.previousElementSibling;
        if(prev){
            prev.focus();
        }
        return ;
    }
});