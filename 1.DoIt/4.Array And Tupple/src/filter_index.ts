const range = (from:number,to:number):number[]=>
from < to ? [from, ...range(from+1, to)]:[];

const array:number[]=range(1,11);
const half = array.length/2;

let belowHalf:number[]=array.filter((value,index)=>index<half);
let overHalf:number[]=array.filter((value,index)=>index>=half);
console.log(belowHalf);
console.log(overHalf);