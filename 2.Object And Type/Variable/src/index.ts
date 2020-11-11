//Type Annotation
let n:number = 1;
let b:boolean = true;
let s:string = 'string';
let o:object = {}

//Type inference
let n1 = 1;
let b1 = true;
let s1 = 'string';
let o1 = {}

//any
let a2:any = 0;
a2 = 'string';
a2 = true;
a2 = {};

//undefined
let u:undefined = undefined;
//u = 1 //Error : undefined 최하위로 number type 입력하려 하기 때문

//template string
let count = 10, message = 'your count';
let result = `${message} is ${count}`;
console.log(result);