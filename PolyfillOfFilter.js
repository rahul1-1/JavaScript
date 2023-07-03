// Array.filter((num,i,arr)=>{

// })

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let nums = [1, 2, 3, 4, 5, 6];

let geaterThantwo = nums.myFilter((num, i, arr) => {
  if (num > 2) return true;
  else return false;
});

console.log(geaterThantwo);
