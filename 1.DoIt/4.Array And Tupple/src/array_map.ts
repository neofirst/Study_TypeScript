const range = (from:number,to:number):number[]=>
from < to ? [from, ...range(from+1, to)]:[];

let squres:number[]=range(1,11).map((val:number)=>val*val);
console.log(squres);
