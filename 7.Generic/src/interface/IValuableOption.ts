export interface IValuableOption<T> {
  getOrElse(defaultValue: T)
}