// implementing interface with class
interface PersonInterface {
  id: number;
  name: string;
  age: number;
  verified?: true;
  register(): string | number;
}

export default PersonInterface;
