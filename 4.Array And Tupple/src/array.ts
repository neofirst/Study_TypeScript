let array = new Array;
array.push(1);
array.push(2);
console.log(array);

let numbers = [1,2,3];
let strings = ['a','b'];
console.log(numbers,strings);

let a = [1,2,3];
let o = {name:'neo',age:1};
console.log(Array.isArray(a), Array.isArray(o));//true,false

let numArray:number[] = [1,2,3];
let strArray:string[] = ['neo','neo1'];

type IPerson = {name:string, age?:number};
let personArray:IPerson[] = [{name:'neo'},{name:'neo1',age:1}];
console.log(personArray);

const split = (str:string, delim:string=''):string[] => str.split(delim);
console.log(split('test'));
console.log(split('t_e_s_t', '_'));

const join = (strArray:string[], delim:string=''):string => strArray.join(delim);
console.log(join(['t','e','s','t']));
console.log(join(['t','e','s','t'],'_'));

const numberArray:number[] = [1,2,3,4,5];
for(let index=0;index<numberArray.length;index++){
  const item:number = numberArray[index];
  console.log(item);
}

let [a1,b1,c1, ...rest] = numberArray;
console.log(a1,b1,c1,rest);

for(let index in numberArray){
  const val = numberArray[index];
  console.log(`[${index}]:${val}`);
}

let temp = {name:'neo',age:1};
for(let props in temp){
  console.log(`${props}:${temp[props]}`);
}

for(let a of strArray){
  console.log(a);
}