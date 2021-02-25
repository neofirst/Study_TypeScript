export class RangeIterable {
  constructor(public from: number, public to: number) {}
  [Symbol.iterator]() {
    const that = this
    let currentValue = that.from
    return {
      next : () => {
        const value = currentValue < that.to ? currentValue++ : undefined
        const done = value == undefined
        return { value, done }
      }
    }
  }
}


// export class RangeIterable implements Iterator<number> {
//   constructor(public from: number, public to: number) {}

//   public next():IteratorResult<number>{
//     const that = this
//     let currentValue = that.from
//     const value = currentValue < that.to ? currentValue++ : undefined
//     const done = value == undefined
//     return { value, done }
//   }

//   [Symbol.iterator]():IterableIterator<number>{
//     return this;
//   }  
// }


// export class RangeIterable {
//   constructor(public from: number, public to: number) {}
//   [Symbol.iterator]() {
//     const that = this
//     let currentValue = that.from
//     return {
//       next() {
//         const value = currentValue < that.to ? currentValue++ : undefined
//         const done = value == undefined
//         return { value, done }
//       }
//     }
//   }
// }
