const range = (from:number,to:number):number[]=>
from < to ? [from, ...range(from+1, to)]:[];

const array:number[]=range(1,11);
let odds:number[] = array.filter((value)=>value%2!=0);
let evens:number[] = array.filter((value)=>value%2==0);
console.log(odds);
console.log(evens);