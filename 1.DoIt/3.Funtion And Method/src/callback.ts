const init = (callback:()=>void) : void =>{
  console.log('init start');
  callback();
  console.log('init end');
}

init(()=>console.log('callback'));