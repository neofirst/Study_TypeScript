const range = (from:number,to:number):number[]=>
from < to ? [from, ...range(from+1, to)]:[];

let names:string[]=range(1,6)
                  .map((val,index)=>`${index}:${val}`);
console.log(names);