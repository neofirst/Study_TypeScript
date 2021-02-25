// function LogText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

const logText = <T>(text: T): T => {
  console.log(text);
  return text;
};

logText<string>("log text");
logText<boolean>(true);

interface DropDown<T> {
  value: T;
  selected: boolean;
}

const obj1: DropDown<string> = {
  value: "test",
  selected: false,
};

const obj2: DropDown<number> = {
  value: 1,
  selected: false,
};

//generic type restriction
const logTexts = <T>(text: T[]): T[] => {
  console.log(text);
  text.forEach((text) => {
    console.log(text);
  });
  return text;
};

interface LengthType {
  length: number;
}

//generic type restriction - define type
const logTextLength = <T extends LengthType>(text: T) => {
  console.log(text.length);
  return text;
};
logTextLength({ length: 10 });

//generic type restriction - keyof
interface Item {
  name: string;
  price: number;
  stock: number;
}

const getItem = <T extends keyof Item>(item: T): T => {
  return item;
};
getItem("name");
