import {Option} from './Option';
import {IValuableOption} from '../interface/IValuableOption';
import {IFunctor} from '../interface/IFunctor';

const parseNumber = (n:string):IFunctor<number> & IValuableOption<number>=>{
  const value = parseInt(n);
  return isNaN(value) ? Option.None : Option.Some(value);
}

let value = parseNumber('1').map(value=>value+1).getOrElse(0);
console.log(value);

value = parseNumber('hello typescript').map(value=>value+1).map(value=>value*2).getOrElse(0);
console.log(value);