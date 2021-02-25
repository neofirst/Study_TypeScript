const calc = (value:number, cb:(number)=>void):void=>{
  let add = (a,b) => a+b;
  function mul(a,b){return a*b}

  let result = mul(add(1,2),value);
  cb(result);
}

calc(10, (result:number)=>console.log(`${result}`));
