import {readFileSync, readFile} from 'fs';

//sync
console.log('read package.json synchronous');
const buffer:Buffer = readFileSync('../package.json');
let content:string = buffer.toString();
console.log(content);

//async
readFile('../package.json', (error:Error, buffer:Buffer)=>{
  console.log('read package.json asynchronous');
  content = buffer.toString();
  console.log(content);
})

//Promise, async/await
const readFilePromise = (filename:string):Promise<string>=>
  new Promise<string>((resolve, reject)=>{
    readFile(filename,(error:Error,buffer:Buffer)=>{
      if(error){
        reject(error);
      }
      else{
        content = buffer.toString();
        resolve(content);
      }
    })
  });

  (async()=>{
    const content = await readFilePromise('../package.json');
    console.log('Promise');
    console.log(content);
  })()
