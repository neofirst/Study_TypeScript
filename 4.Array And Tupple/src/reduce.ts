const range = (from:number,to:number):number[]=>
from < to ? [from, ...range(from+1, to)]:[];

let result:number = range(1,11)
                    .reduce((result:number, value:number)=>result*value,1);
console.log(result);