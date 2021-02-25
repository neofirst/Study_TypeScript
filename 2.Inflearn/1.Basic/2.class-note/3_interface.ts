interface User {
  age: number;
  name: string;
}

const user1: User = {
  age: 1,
  name: "user1",
};

const getUser = (user: User): void => {
  console.log(user);
};

const user2: User = {
  age: 2,
  name: "user2",
};
getUser(user2);

//Funtion Interface
interface SumFuntion {
  (a: number, b: number): number;
}

let sum: SumFuntion;
sum = (a: number, b: number): number => {
  return a + b;
};

//indexing
interface StringArray {
  [index: number]: string;
}
const strArr = ["a", "b", "c"];
strArr[0] = "a1";
console.log(strArr[0]);

//dictionary
interface StrDictionary {
  [key: string]: RegExp;
}
const obj: StrDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
obj["cssFile"] = /\.scss$/;
Object.keys(obj).forEach((value: string) => {});

//interface extends, implement
interface Person {
  name: string;
  age: number;
}

interface Devloper extends Person {
  // name: string;
  // age: number;
  language: string;
}

const devPerson: Devloper = {
  name: "dev",
  age: 1,
  language: "typescript",
};
