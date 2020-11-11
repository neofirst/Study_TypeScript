import {promises, readFile} from 'fs';

//Promise
Promise.resolve(1).then(value=>console.log(value));
Promise.resolve('neo').then(value=>console.log(value));
Promise.resolve([1,2,3]).then(value=>console.log(value));
Promise.resolve({name:'neo',index:0}).then(value=>console.log(value));
Promise.reject(new Error('Error!!')).catch((err:Error)=>console.log('error : ', err.message));

//then chain
Promise.resolve(1).then((value:number)=>{
  console.log(value);
  return Promise.resolve(true);
})
.then((value:boolean)=>{
  console.log(value);
  return [1,2,3];
})
.then((value:number[])=>{
  console.log(value);
  return {name:'neo',index:0};
})
.then((value:{name:string, index:number})=>{
  console.log(value);
})

//Promise all
const isAllTrueAll = (values:boolean[])=>values.every((value=>value==true));
console.log('Promice all : ',isAllTrueAll([true,true]));
console.log('Promice all : ',isAllTrueAll([false,true]));

const getAllResolvedResult = <T>(promises:Promise<T>[])=>Promise.all(promises);
getAllResolvedResult<any>([Promise.resolve(true), Promise.resolve('neo')])
.then(result=>console.log(result));

getAllResolvedResult<any>([Promise.resolve('neo'), Promise.reject(new Error('error promise'))])
.then(result=>console.log(result))
.catch(error=>console.log('error : ',error.message));

//Promice race
const isAnyTrueRace = (values:boolean[])=>values.some((value=>value==true));
console.log('Promice race : ', isAnyTrueRace([false,true]));
console.log('Promice race : ', isAnyTrueRace([false,false]));

Promise.race([Promise.resolve(true), Promise.resolve('neo')])
.then(value=>console.log('Promise.race : ', value));

Promise.race([Promise.resolve(true), Promise.reject(new Error('race Error'))])
.then(value=>console.log('Promise.race : ', value))
.catch(error=>console.log('Promise.race Error: ', error.message));

Promise.race([Promise.reject(new Error('race Error')), Promise.resolve(true)])
.then(value=>console.log('Promise.race : ', value))
.catch(error=>console.log('Promise.race Error: ', error.message));

//file
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

readFilePromise('../package.json')
  .then((content:string)=>{
  console.log(content);
  return readFilePromise('../tsconfig.json');
})
.then((content:string)=>{
  console.log(content)
  return readFilePromise('.');
})
.catch((err:Error)=>console.log('error : ',err.message))
.finally(()=>console.log('exit'));