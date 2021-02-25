import { readFile } from 'fs';

const testNumber=async()=>{
  let value = await 1;
  console.log(value);
  value = await Promise.resolve(2);
  console.log(value);
}
const testString=async()=>{
  let value = await 'neo';
  console.log(value);
  value = await Promise.resolve('neo1');
  console.log(value);
}

testNumber();
testString();

//순차 실행
testNumber().then(()=>testString());

const asyncArray = async()=>{
  return [1,2,3];
}

asyncArray().then(value=>console.log(value));

const asyncException=async()=>{
  throw new Error('Exception error')
}

asyncException().catch(err=>console.log('error message : ', err.message));

const awaitReject = async()=>{
  await Promise.reject(new Error('error'));
}

awaitReject().catch(err=>console.log('error : ', err.message));

const readFilePromise = (filename:string):Promise<string>=>
  new Promise<string>((
    resolve:(value:string)=>void, 
    reject:(error:Error)=>void)=>{
      readFile(filename, (err:Error, buffer:Buffer)=>{
        if(err){
          reject(err);
        }
        else{
          resolve(buffer.toString());
        }
      })
    });

const readFileAll = async (filenames:string[])=>{
  return await Promise.all(
    filenames.map(filename=>readFilePromise(filename))
  )
}

readFileAll(['../package.json','../tsconfig.json'])
.then(([packageJson,tsconfigJson]:string[])=>{
  console.log('<package.json>:', packageJson)
  console.log('<tsconfig.json>:', tsconfigJson)
})
.catch(err=>console.log('error:', err.message));