//EXTENDED CLASS

import Person from "./Person";

//this employer class is called subclass
class Employer extends Person {
  position: string;

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);
    this.position = position;
  }
}

export default Employer;
