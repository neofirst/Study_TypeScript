const pick = (obj, keys) => keys.map(key=>({[key]:obj[key]}))
             .reduce((result, value) => ({...result, ...value}),{});

const obj = {name:'neo',age:1};

console.log(pick(obj, ['name','age']));
console.log(pick(obj, ['name1','age1']));//오류 미감지

const pick1 = <T, K extends keyof T>(obj:T, keys:K[])=>
              keys.map(key=>({[key]:obj[key]}))
              .reduce((result,value) => ({...result, ...value}),{});

console.log(pick1(obj, ['name','age']));  
console.log(pick1(obj, ['name1','age1']));//오류 감지