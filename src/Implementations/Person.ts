import PersonInterface from "../Interfaces/PersonInterface";

//CLASSESS
class Person implements PersonInterface {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    //"private": class simply means that you can only access the value initiated with private keyword whithin the class which it is initiated;
    //"protected": class  simply means that you can only acces the value initiated with protected class within the class it is inititated or class that is extended with the class it is initiated;
    //"public": class simply means you can access it from any where and that is good as leaving it with not initiator.
    this.id = id;
    this.name = name;
    this.age = age;
    //this keyword simply means this class we are in;
  }
  verified?: true | undefined;
  //adding method to class;
  register(): string {
    return `${this.name} is now A registered User, because his age is ${this.age} Years which met our prefered age for the Job`;
  }
}

export default Person;
