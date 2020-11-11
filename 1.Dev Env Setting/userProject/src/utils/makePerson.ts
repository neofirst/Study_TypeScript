export function makePerson(name:string, age:number){
  return {name:name,age:age};
}
export function testMakePerson(){
  console.log(makePerson('Neo',22),makePerson('Neo1',221));
}