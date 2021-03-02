enum NumberEnum {
  a,
  b,
  c,
}
const numberEnum = NumberEnum.a;
console.log(NumberEnum.a);
console.log(numberEnum);

enum StringEnum {
  a = "A",
  b = "B",
  c = "C",
}
const stringEnum = StringEnum.a;
console.log(StringEnum.a);
console.log(stringEnum);

enum Answer{
  Yes='Yes',
  No='No'
}
const ask = (answer: Answer) => {
  if (answer === Answer.Yes) {
    console.log("yes");
  }else (answer === Answer.No) {
    console.log("no");
  }
};
ask(Answer.Yes);
ask(Answer.No);