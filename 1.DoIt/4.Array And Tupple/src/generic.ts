const arrayLength = <T>(array:T[]):number=>array.length;
const isEmpty = <T>(array:T[]):boolean=>arrayLength<T>(array)==0;

let numArray:number[] = [1,2,3];
let strArray:string[] = ['neo','neo1'];

type IPerson = {name:string, age?:number};
let personArray:IPerson[] = [{name:'neo',age:1},{name:'neo1',age:2}];

console.log(arrayLength(numArray));
console.log(arrayLength(strArray));
console.log(arrayLength(personArray));
console.log(isEmpty([]));
console.log(isEmpty([1]));

const identity = <T>(n:T):T=>n;
console.log(identity<boolean>(true));
console.log(identity(true));

//signature
const normal = (cb:(number)=>number):void=>{}
// const error = (cb:(number,number?)=>number):void=>{}
const fixed = (cb:(a:number,number?)=>number):void=>{}
const f = <T>(cb:(arg:T,i?:number)=>number):void=>{}

//spread operation
let arr1:number[] = [1,2,3];
let arr2:number[] = [11,22,33];
let merge:number[] = [...arr1,...arr2];
console.log(merge);

//range
const range = (from:number,to:number):number[]=>
  from < to ? [from, ...range(from+1, to)]:[];
let numbers:number[] = range(1,9);
console.log(numbers);