// type nullableType = undefined | null;
// const nullableVal:nullable = undefined;

// interface IPerson{
//   name:string
//   age?:number
// }
// let person:IPerson;
// // console.log(person.name);//Error
// console.log(person?.name);//undefined

type ICoordinates = {longitude:number}
type ILocation = {country:string,coords?:ICoordinates}
type IPerson = {name:string, location?:ILocation}

let person:IPerson = {name:'neo'};
let longitude = person?.location?.coords?.longitude;

console.log(longitude);

if(person && person.location && person.location.coords){
  longitude = person.location.coords.longitude;
}

//?? : nullish coalescing operator 
longitude = person?.location?.coords?.longitude ?? 0;
console.log(longitude);