// const Mysplit = (string, separator)=>{
//     const res = [];
//     if(separator === '') return Array.from(string);
//     let separatorLength = separator.length
   
//     const startSplit = (str,i)=>{
//         if(i>=string.length) return;
 
//         const ind = str.indexOf(separator);
//         if(ind >=0){
//             res.push(str.substring(0,ind));
//             startSplit(str.substring(ind+separatorLength),ind + separatorLength)
//         } else {
//             res.push(str);
//         }
//     }
//     startSplit(string,0);
//     return res;
// }
String.prototype.Mysplit = function(separator,limit){
    const string = this;
    const res = [];
    if(separator === '') return Array.from(string);
    let separatorLength = separator.length
    
    const startSplit = (str,i)=>{
        if(i>=string.length) return;
 
        const ind = str.indexOf(separator);
        if(ind >=0){
            res.push(str.substring(0,ind));
            startSplit(str.substring(ind+separatorLength),ind + separatorLength)
        } else {
            
                res.push(str);
        
        }
    }
    startSplit(string,0);
    if(limit && res.length > limit){
        res.splice(limit)
    }
    return res;
}

let str = 'the quick the fox jumps the lazy dog';
console.log(str.Mysplit('the',2))
// console.log(str.Mysplit(''))
// console.log(str.Mysplit(3))
console.log(str.split('the',2))
// console.log(str.split(''))
// console.log(str.split(3))

