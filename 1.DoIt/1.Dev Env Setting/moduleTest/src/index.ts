import IPerson from './person/IPerson';
import Person, {makePerson} from './person/Person';

import Chance from 'chance';
import * as R from 'ramda';

const testMakePerson = (): void =>{
  let neo: IPerson = makePerson('neo');
  let neo1: IPerson = new Person('neo1');
  console.log(neo,neo1);
}

testMakePerson();

const chance = new Chance();
let persons:IPerson[] = R.range(0,2)
    .map((n:number)=>new Person(chance.name(), chance.age()));

console.log(persons);