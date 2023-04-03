import { ids, id, employee } from "./Entities/Types";
import DirectionString from "./Enums/DirectionString";
import Employer from "./Implementations/Employer";
import Person from "./Implementations/Person";
import MathFunc from "./Interfaces/MathFunc";
import Point from "./Interfaces/Point";
import { User } from "./Interfaces/User";

ids.push(11);
console.log(id);

employee.push(
  [1, "Joe Bidden"],
  [1, "Joe Bidden"],
  [1, "Joe Bidden"],
  [1, "Joe Bidden"]
); //arranged in orther of the types but in array

//union
let userId: string | number | true;
userId = true;
userId = 1;
userId = "Union takes any type that is specified when initializing";

// enum
enum Direction {
  Up,
  Der,
  Leading,
  Coming,
}
console.log(Direction.Leading);

console.log(DirectionString.Leading);

const user: User = {
  id: 1,
  name: "John",
};

//TYPE ASSERTION
let Cidest: any = 1;
let customerId = <number>Cidest; //Your can do it this way OR
let customerIds = Cidest as number; //Do it this way

//using types in function
const addNumb = (x: number, y: number): number => {
  return x + y;
};
console.log(addNumb(2, 4));

// using types and void funciton
const Log = (message: string | number): void => {
  console.log(message);
};
Log("This takes in number or string but cannot contain a boolean value!!");

const p1: Point = 2; //or
const ptext: Point = "Integrate";

const add: MathFunc = (error: number, success: number): number =>
  error + success;
console.log(add);

const sub: MathFunc = (error: number, success: number): number =>
  error - success;
console.log(sub);

const Kelly = new Person(1, "kelly,", 20);
const John = new Person(2, "John", 20);
console.log(Kelly.id + " " + Kelly.name, +"\n" + John.id + " " + John.name);
//OR
console.log(Kelly, John);

//calling method
console.log(Kelly.register());

const Emp = new Employer(
  3,
  "John Kennedy",
  20,
  "Web Developer | BackEnd Enginneer"
);
console.log(
  `Our new developer that will be joining the team has the id of ${Emp.id} and his name is ${Emp.name} hist age is ${Emp.age} and his position will be ${Emp.position}`
);

// document.write(
//     `Our new developer that will be joining the team has the id of ${Emp.id} and his name is ${Emp.name} hist age is ${Emp.age} and his position will be ${Emp.position}`
// );

//i can also call register method since Employer class is extended to person class
console.log(John.register());
document.write(John.register());

//GENERICS
//generics is used to return array of diffrent types in doe the funciton initialy is set to return any[] array;
//function getArray(items: any[]): any[]{ //INSTEAD OF THIS WE DO THIS
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

//let numArray = getArray([1,2,3,4,5]); //INSTEAD OF DOING THIS WE DO THIS BELOW
let numArray = getArray<number>([1, 2, 3, 4, 5]);
//let StrArray = getArray(["Kelly", "John", "Opp!"]); //INSTEAD OF DOING THIS WE DO THIS BELOW
let StrArray = getArray<String>(["Kelly", "John", "Opp!"]);
