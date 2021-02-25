const get = (a = 10): void => {
  console.log(a);
};

interface temp<T> {
  value: T;
  title: string;
}
const item: temp<string> = {
  value: "test",
  title: "title",
};

interface temp1<T> {
  value: T;
  title: string;
}
interface temp2<T> extends temp1<T> {
  description: string;
  tag: T;
}
const item1: temp1<string> = {
  value: "test",
  title: "title",
};

const item2: temp2<string> = {
  title: "title",
  description: "description",
  value: "value",
  tag: "tag",
};

const arr = [1, 2, true, "string"];
