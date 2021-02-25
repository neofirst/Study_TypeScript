interface INameable{
  name:string;
}

let obj:object = {name:'neo'};

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;

console.log(name1);
console.log(name2);