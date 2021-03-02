// Union Type
let unionVal: string | number;
unionVal = "1";
unionVal = 1;

const logMessage = (value: string | number): void => {
  if (typeof value === "number") {
    console.log("number:", value.toLocaleString());
  } else if (typeof value === "string") {
    console.log("string:", value.toString());
  } else {
    throw new TypeError("value must be string or number");
  }
};

logMessage("log");
logMessage(1);

//special feature
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// type union
const ask = (value: Developer | Person): void => {
  console.log(value.name);
};

ask({
  name: "dev",
  skill: "typescript",
});

ask({
  name: "dev",
  age: 1,
});

// type intersection
let intersectionVal: string & number & boolean;
const astIntersection = (value: Developer & Person): void => {
  console.log(value.age);
  console.log(value.name);
  console.log(value.skill);
};

astIntersection({
  name: "dev",
  age: 1,
  skill: "typescript",
});
