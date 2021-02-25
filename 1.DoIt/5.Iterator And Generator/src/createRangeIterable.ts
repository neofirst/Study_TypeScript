import {RangeIterable} from './RangeIterable'

const createRangeIteratable=(from:number,to:number)=>{
  let currentValue=from;
  return{
    next(){
      const value=currentValue<to?currentValue++:undefined;
      const done = value == undefined;
      return {value,done};
    }
  }
}

const iterator=createRangeIteratable(1,4);
while(true){
  const {value,done}=iterator.next();
  if(done){
    break;
  }
  else{
    console.log(value);
  }
}

const range = (from:number,to:number):number[]=>
from < to ? [from, ...range(from+1, to)]:[];

for(let value of range(1,4)){
  console.log(value);
}

const iter = new RangeIterable(1, 3 + 1)
for (let value of iter) {
  console.log(value);
}

// const iter = new RangeIterable(1, 3 + 1)
// console.log('class iterable');
// for (let value of iter) {
//   console.log(value);
// }