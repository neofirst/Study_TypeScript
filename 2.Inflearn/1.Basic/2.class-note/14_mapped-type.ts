// Mapped Type - 기존 타입을 새로운 타입으로 변환
// js의 map과 같은 방식

const arr = ["a", "b", "c"];
for (var key in arr) {
  console.log(key);
}

type temp = "a" | "b" | "c";
type tempA = { [K in temp]: number };
const obj: tempA = {
  a: 1,
  b: 2,
  c: 3,
};
