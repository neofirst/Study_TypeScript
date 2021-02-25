interface IPerson{
  name:string;
  age:number;
  etc?:boolean;
}

let good1:IPerson={name:'neo', age:32};
let good2:IPerson={name:'neo', age:32, etc:true};

//anonymous interface
export let ai:{
  name:string;
  age:number;
  etc?:boolean;
} = {name:'neo', age:32}

function printMe(me:{name:string,age:number,etc?:boolean}){
  console.log(
    me.etc?
    `${me.name} ${me.age} ${me.etc}`:
    `${me.name} ${me.age}`
  )
}
console.log('go')
printMe(good2);