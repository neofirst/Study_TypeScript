class A{
  value:number = -1;
  constructor(value:number = 3){
    this.value=value;
  }
  method:(arg:number)=>void=function(arg:number):void{
    console.log(`arg : ${arg} => ` + this.value*arg);
  }
}

class B{
  static staticTest():void{
    console.log('static');
  }
}

let a:A = new A(5);
a.method(3);
B.staticTest();