(function (){
        let model = document.querySelector(".model__container");
        let closeBtn = document.querySelector(".btnClose");
        let openBtn  = document.querySelector(".btn")
        let container = document.querySelector(".container")

        openBtn.addEventListener("click", function(){
                model.style.display = 'initial'
        })
        closeBtn.addEventListener("click", function(){
            model.style.display = 'none'
    })
    container.addEventListener("click", function(e){
        if(e.target.className == "model__container")
        model.style.display = 'none'
})
})()