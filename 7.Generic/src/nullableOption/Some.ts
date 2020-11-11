import {IValuableOption} from '../interface/IValuableOption'
import {IFunctor} from '../interface/IFunctor';

export class Some<T> implements IValuableOption<T>, IFunctor<T> {
  constructor(private value: T) {}
  getOrElse(defaultValue: T) {
    return this.value ?? defaultValue
  }
  map<U>(fn: (T) =>  U) {
    return new Some<U>(fn(this.value))
  }
}