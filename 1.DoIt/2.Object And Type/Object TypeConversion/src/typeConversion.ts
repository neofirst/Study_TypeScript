let person:object={name:'neo',age:1};
//person.name//error

console.log(
             (<{name:string}>person).name
            );

