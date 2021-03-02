const sum = (a: number, b: number): number => {
  return a + b;
};

const log(a:string, b?:string):void=>{
  console.log(a, b);
}
log('test');
log('test','test1');

const tmep=(a=10):void=>{
  console.log(a);
}