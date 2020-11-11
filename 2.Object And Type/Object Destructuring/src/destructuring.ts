import {IPerson} from './interfaceObject';

let neo1:IPerson={name:'neo1',age:1}
let {name,age} = neo1; //destructuring
console.log(name,age);