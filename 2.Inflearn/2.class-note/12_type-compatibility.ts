// 타입 호환
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}

class Person {
  name: string;
}

let developer: Developer;
let person: Person;

person = new Person();
developer = new Person();

let add = (a: number): void => {
  console.log(a);
};

let sum = (a: number, b: number): void => {
  console.log(a + b);
};
sum = add;
add = sum;

interface Empty<T> {}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
