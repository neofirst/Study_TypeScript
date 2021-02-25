import {Option} from './Option';
import {IValuableOption} from '../interface/IValuableOption';
import {IFunctor} from '../interface/IFunctor';

const parseJson = <T>(json:string):IValuableOption<T> & IFunctor<T>=>{
  try{
    const value = JSON.parse(json);
    return Option.Some<T>(value);
  }
  catch(e){
    return Option.None;
  }
}

const json = JSON.stringify({name:'neo',age:1});
let value = parseJson(json).getOrElse({});
console.log(value);

value=parseJson('Hello Json').getOrElse({});
console.log(value);