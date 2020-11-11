//반환 타입에 따라 다형성을 띄는 것을 F-Bound
import {IValueProvider, IAddable, IMultiplyable, } from '../interface/index';

class Calculator implements IValueProvider<number>, IAddable<number>, IMultiplyable<number>{
  constructor(private _value:number=0) {}
  value():number{return this._value}
  add(value:number):this{
    this._value += value;
    return this;
  }
  multiply(value:number):this{
    this._value *= value;
    return this;
  }
};

class stringComposer implements IValueProvider<string>, IAddable<string>, IMultiplyable<number>{
  constructor(private _value:string=''){}
  value():string{return this._value}
  add(value:string):this{
    this._value = this._value.concat(value);
    return this;
  }
  multiply(repeat:number):this{
    const value = this.value();
    for(let index = 0; index < repeat; index++){
      this.add(value);
    }
    return this;
  }
};

const value = (new Calculator(3)).add(2).add(3).multiply(4).value();
console.log(value);

const stringValue = new StringComposer('Neo').add(' Test, ').multiply(3).value();
console.log(stringValue);