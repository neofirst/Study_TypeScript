type ResultType = [boolean,string];
const doSomething=():ResultType=>{
  let status:string = 'Empty';

  try{
    console.log('Start');
    status = 'No Exception';
    throw new Error('error');
  }
  catch(e){
    status = 'Exception';
    return [true, status];
    console.log('Exception');
  }
  return [false, status];
}
const [result,message]=doSomething();
console.log(result);
console.log(message);