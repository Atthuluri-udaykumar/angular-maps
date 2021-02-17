export interface IEmployee {
  testComponent(): void;
  onClick(anuval: number): void;
};

export interface EmployeeList {
  name: string;
  age: number;
  location: string
};

export class Uday {
  name!: string;
  age!: string;
  location!: string
}
