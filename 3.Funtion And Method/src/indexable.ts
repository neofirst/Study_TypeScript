export type KeyValueType={
  [key:string]:string
}

export const makeObject = (key:string, value:string):KeyValueType=>({[key]:value});

console.log(makeObject('name1','jack1'));
console.log(makeObject('name2','jack2'));
