//자기 자신을 상속하는 F-Bound
export interface IAddable<T>{
  add(value:T):this
}