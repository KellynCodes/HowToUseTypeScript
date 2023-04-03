"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = require("../src/Entities/Types");
var DirectionString_1 = require("../src/Enums/DirectionString");
var Employer_1 = require("../src/Implementations/Employer");
var Person_1 = require("../src/Implementations/Person");
Types_1.ids.push(11);
console.log(Types_1.id);
// Types_1.employee.push(
//   [1, "Joe Bidden"],
//   [1, "Joe Bidden"],
//   [1, "Joe Bidden"],
//   [1, "Joe Bidden"]
// ); //arranged in orther of the types but in array
// //union
var userId;
userId = true;
userId = 1;
userId = "Union takes any type that is specified when initializing";
// enum
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Der"] = 1)] = "Der";
  Direction[(Direction["Leading"] = 2)] = "Leading";
  Direction[(Direction["Coming"] = 3)] = "Coming";
})(Direction || (Direction = {}));
console.log(Direction.Leading);
console.log(DirectionString_1.default.Leading);
var user = {
  id: 1,
  name: "John",
};
//TYPE ASSERTION
var Cidest = 1;
var customerId = Cidest; //Your can do it this way OR
var customerIds = Cidest; //Do it this way
//using types in function
var addNumb = function (x, y) {
  return x + y;
};
console.log(addNumb(2, 4));
// using types and void funciton
var Log = function (message) {
  console.log(message);
};
Log("This takes in number or string but cannot contain a boolean value!!");
var p1 = 2; //or
var ptext = "Integrate";
var add = function (error, success) {
  return error + success;
};
console.log(add);
var sub = function (error, success) {
  return error - success;
};
console.log(sub);
var Kelly = new Person_1.default(1, "kelly,", 20);
var John = new Person_1.default(2, "John", 20);
console.log(Kelly.id + " " + Kelly.name, +"\n" + John.id + " " + John.name);
//OR
console.log(Kelly, John);
//calling method
console.log(Kelly.register());
var Emp = new Employer_1.default(
  3,
  "John Kennedy",
  20,
  "Web Developer | BackEnd Enginneer"
);
console.log(
  "Our new developer that will be joining the team has the id of "
    .concat(Emp.id, " and his name is ")
    .concat(Emp.name, " hist age is ")
    .concat(Emp.age, " and his position will be ")
    .concat(Emp.position)
);
document.write(
  `Our new developer that will be joining the team has the id of ${Emp.id} and his name is ${Emp.name} hist age is ${Emp.age} and his position will be ${Emp.position}`
);
//i can also call register method since Employer class is extended to person class
console.log(John.register());
//document.write(John.register());
//GENERICS
//generics is used to return array of diffrent types in doe the funciton initialy is set to return any[] array;
//function getArray(items: any[]): any[]{ //INSTEAD OF THIS WE DO THIS
function getArray(items) {
  return new Array().concat(items);
}
//let numArray = getArray([1,2,3,4,5]); //INSTEAD OF DOING THIS WE DO THIS BELOW
var numArray = getArray([1, 2, 3, 4, 5]);
//let StrArray = getArray(["Kelly", "John", "Opp!"]); //INSTEAD OF DOING THIS WE DO THIS BELOW
var StrArray = getArray(["Kelly", "John", "Opp!"]);
