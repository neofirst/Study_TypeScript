class calculator{
  
  constructor(public value:number=0){}
  
  add(value:number){
    this.value+=value;
    return this;
  }

  mul(value:number){
    this.value*=value;
    return this;
  }
}

let calc = new calculator(3);
let result = calc.add(1).mul(2).mul(10).value;
console.log(result);