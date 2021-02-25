interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return {
    name: "name",
    age: 1,
    skill: "typescript",
  };
};

const dev = introduce();
if ((dev as Developer).skill) {
  const skill = (dev as Developer).skill;
}
if ((dev as Person).age) {
  const age = (dev as Person).age;
}

const isDev = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};
if (isDev(dev)) {
  console.log(dev.skill);
} else {
  console.log(dev.age);
}
