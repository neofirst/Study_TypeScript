import {nullable} from '../interface/nullable';
import {IValuableOption} from '../interface/IValuableOption';
import {IFunctor} from '../interface/IFunctor'

export class None implements IValuableOption<nullable>, IFunctor<nullable> {
  getOrElse<T>(defaultValue: T | nullable) {
    return defaultValue
  }
  map<U>(fn: (T) =>  U) {
    return new None
  }
}