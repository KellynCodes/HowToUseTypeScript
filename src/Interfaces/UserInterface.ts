//INTERFACES
interface UserInterface {
  //you can have optional or readonly values;
  readonly userId: string; //if you try to asign new value to this userId it will throw an error because it is a readony

  //interface or value
  id: number;
  name: string;
  age?: number;
}
