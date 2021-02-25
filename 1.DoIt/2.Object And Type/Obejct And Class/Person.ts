class Person1{
  name:string;
  age?:number;
}
let neo1:Person1 = new Person1();
neo1.name = 'neo1';
neo1.age = 1;

class Person2{
  constructor(public name:string, public age?:number){}
}
let neo2:Person2 = new Person2('neo2',2);

class Person3{
  name:string;
  age?:number;
  constructor(name:string, age?:number){
    this.name = name;
    this.age = age;
  }
}
let neo3:Person3 = new Person3('neo3',3);

interface IPerson4{
  name:string;
  age?:number;
}

class Person4 implements IPerson4{
  name:string;
  age?:number;
  constructor(name:string, age?:number){
    this.name = name;
    this.age = age;
  }
}
let neo4:Person4 = new Person4('neo4',4);
// let neo4:Person4 = new Person4('neo4');

//abstract class
abstract class AbstractPerston5{
  abstract name:string;
  constructor(public age?:number){}
}

class Person5 extends AbstractPerston5{
  constructor(public name:string, age?:number){
    super(age);
  }
}
let neo5:Person5 = new Person5('neo5',5);

console.log(neo1);
console.log(neo2);
console.log(neo3);
console.log(neo4);
console.log(neo5);
