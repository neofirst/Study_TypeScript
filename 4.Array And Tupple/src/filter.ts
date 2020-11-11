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

const filter = <T>(array:T[], callback:(value:T, index?:number)=>boolean):T[]=>{
  let result:T[] = [];
  for(let i:number=0;i<array.length;i++){
    const value=array[i];
    if(callback(value,i)){
      result=[...result,value];
    }
  }
  return result;
}

const isOdd = (n:number):boolean=>n%2!=0;
let numbers:number[]=range(1,101);
let result=fold
  (
    filter(numbers,isOdd),
    (result,value)=>result+value,0
  );
console.log(result);