const range = (from:number,to:number):number[]=>
from < to ? [from, ...range(from+1, to)]:[];

const fold = <T>(array:T[], callback:(result:T,val:T)=>T, initValue:T)=>{
  let result:T = initValue;
  for(let i=0;i<array.length;i++){
    const value=array[i];
    result=callback(result,value);
  }
  return result;
}

let numbers:number[]=range(1,101);
let result = fold(numbers, (result, value)=>result+value,0);
console.log(result);