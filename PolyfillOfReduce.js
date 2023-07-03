
Array.prototype.myReduce = function(cb,value){
    var acc = value;
    for(let i = 0;i<this.length;i++){
      acc =  acc?cb(acc,this[i],i,this):this[i];
    }
    return acc;
}


let nums = [1,2,3,4,5,6];


let sum1 = nums.myReduce((acc,curr,i,arr)=>{
   return  acc+=curr;
},0)


console.log(sum1)