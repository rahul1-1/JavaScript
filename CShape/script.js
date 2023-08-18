(function (){

    let boxContainer = document.querySelector(".box__container")
    let boxs  = document.querySelectorAll(".box")
    let queue = []

    boxContainer.addEventListener("click",function(e){
        let index = e.target.dataset.index;
        if(index !== undefined){
            boxs[index].classList.add("color__green")
            queue.push(index);

            if(queue.length === 7){
                let cnt = 1;
                console.log("cnt ",cnt)
                while(queue.length>0){
                    let ind = queue.shift();
                    setTimeout(function(){
                         boxs[ind].classList.remove("color__green")
                    },cnt*800)
                    cnt++;
                }
            }
        }


    })


})()