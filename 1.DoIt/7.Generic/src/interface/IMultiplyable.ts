//자기 자신을 상속하는 F-Bound
export interface IMultiplyable<T>{
  multiply(value:T):this
}