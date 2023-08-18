(function (){
let starContainer = document.querySelector(".star__container");
let star = document.querySelectorAll(".stars");
let totalRating = document.querySelector(".total__rating")

let preRating = 0;
starContainer.addEventListener("click" ,function(e){
   let currRating = e.target.dataset.index
    for(let i =0 ;i<preRating;i++)
    {
        star[i].classList.remove("star-filled")
    }
    for(let i =0 ;i<currRating;i++)
    {
        star[i].classList.add("star-filled")
    }
    preRating = currRating
    totalRating.innerHTML=`Total Rating : ${preRating}`
})

starContainer.addEventListener("mouseover" ,function(e){
   let currRating = e.target.dataset.index
    for(let i =0 ;i<5;i++)
    {
        star[i].classList.remove("star-filled")
    }
    for(let i =0 ;i<currRating;i++)
    {
        star[i].classList.add("star-filled")
    }
})

starContainer.addEventListener("mouseleave" ,function(e){
    for(let i =0 ;i<5;i++)
    {
        star[i].classList.remove("star-filled")
    }
    for(let i =0 ;i<preRating;i++)
    {
        star[i].classList.add("star-filled")
    }
    totalRating.innerHTML=`Total Rating : ${preRating?preRating:0}`
})


})()