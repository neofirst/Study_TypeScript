let original=1;
let copyed = original;
copyed+=2;
console.log(original);
console.log(copyed);

const originArr=[5,3,9,7];
const shallowCopyedArr=originArr;
shallowCopyedArr[0]=0;
console.log(originArr);
console.log(shallowCopyedArr);

const originArr1=[5,3,9,7];
const shallowCopyedArr1 = [...originArr1];
shallowCopyedArr1[0]=0;
console.log(originArr1);
console.log(shallowCopyedArr1);

//pure sort
const pureSort=<T>(array:readonly T[]):T[]=>{
  let deepCopied=[...array];
  return deepCopied.sort();
}

let beforSort=[5,2,6,1];
const afterSort=pureSort(beforSort);
console.log(afterSort);

//pure delete
const pureDelete=<T>(array:readonly T[], cb:(val:T, index?:number)
                     =>boolean):T[] =>array.filter((val,index)=>cb(val,index)==false);
const mixedArray:object[]=
[
  [],{name:'neo'},{name:'neo1',age:1},['neo2']
];
const objectOnly:object[]=pureDelete(mixedArray,(val)=>Array.isArray(val));
console.log(mixedArray);
console.log(objectOnly);

const str1:string[] = ['1','2','3'];
const str2:string[] = ['11','22','32'];
console.log([...str1,...str2]);