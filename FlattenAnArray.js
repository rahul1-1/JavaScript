// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],[7, 8, 9],
//     [10, 11, 12, 13, 14, 15]
// ];

// // let flatArray = [].concat.apply([], arr);
// // let flatArray = [].concat(...arr);
// let flatArray = arr.reduce((acc, curVal) => {
//     return acc.concat(curVal)
// }, []);

// console.log(flatArray)



let arr = [
  [[1, [2, 3], 4], [5, 6, [7, 8], 8], 9],
  [10, 11, 12, [13, [14, [15]]]],
];


function flattenArray(arr){
    return arr.reduce((preVal,currVal)=>{
        if(Array.isArray(currVal)){
            preVal = preVal.concat(flattenArray(currVal));
        }else{
            preVal.push(currVal);
        }
        return preVal;
    },[]);
}
console.log(flattenArray(arr))