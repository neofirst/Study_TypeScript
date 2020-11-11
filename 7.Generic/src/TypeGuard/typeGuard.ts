class Bird {
  fly(){
    console.log('bird');
  }
}

class Fish {
  swim(){
    console.log('fish');
  }
}

const instanceCheck = (o:Bird | Fish):void=>{
  if(o instanceof Bird){
    o .fly();
  }
  else if(o instanceof Fish){
    o.swim();
  }
}

[new Bird, new Fish].forEach(instanceCheck);

const isBird=(o:Bird|Fish):o is Bird=>{
  return o instanceof Bird;
}

const isFish=(o:Bird|Fish):o is Fish=>{
  return o instanceof Fish;
}

const instanceIsCheck = (o:Bird | Fish):void=>{
  if(isBird(o)){
    o .fly();
  }
  else if(isFish(o)){
    o.swim();
  }
}

[new Bird, new Fish].forEach(instanceIsCheck);