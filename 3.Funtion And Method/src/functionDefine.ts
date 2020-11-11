function exampleFunction1(name:string):void{
  console.log('example1 : ' + `${name}`);
}

const exampleFunction2 = (name:string):void =>{
  console.log('example1 : ' + `${name}`);
}

//funtion signature
//함수의 타입을 선언하고 함수에 대한 내용 구현
let exampleFuntion3:(string) => void = function(name:string):void{
  console.log('example3 : ' + `${name}`);
}

//type keyword type aliase
type exampleFuntion4 = (string) => void;
let function1:exampleFuntion4 = function(name:string):void{
  console.log('exampleFuntion4 : ' + `${name}`);
}

//undefined check
interface INameable{
  name:string;
}

function getName(obj: INameable) : string{
  return obj != undefined ? obj.name : 'undefined';
}

exampleFunction1('example1');
exampleFunction2('example2');
exampleFuntion3('example3');
function1('exampleFuntion4_1');
console.log(getName(undefined));
console.log(getName({name:'neo'}));