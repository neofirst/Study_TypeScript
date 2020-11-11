export type Person = {name:string, age:number};

// export const makePerson = (name:string, age:number = 10) : Person =>{
//   const person = {name,age};
//   return person;
// }

export const makePerson = (name:string, age:number=10):Person=>({name,age});

export const print = ({name,age}:Person):void=>console.log(`${name} ${age}`);

console.log(makePerson('neo1'));
console.log(makePerson('neo2',3));
print({name:'neo3',age:3});