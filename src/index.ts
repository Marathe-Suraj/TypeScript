// function sum(a: number, b: number) {
//   return a + b;
// }

// console.log(sum(2, 3));

// const isPalindrome = (palin: string): boolean => {
//   let myPalin = palin.split("").reverse().join("");
//   return myPalin === palin;
// };

// console.log(isPalindrome("12321"));

// Q1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.

// function calculateAverage(args: number[]): number {
//   let Sum = args.reduce((prev, next) => prev + next);
//   return Sum / args.length;
// }
// console.log(calculateAverage([10, 20, 30, 40]));

// Q 2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.

// const findMaxValue = (array: number[]): string => {
//   const maxNum = Math.max(...array);
//   return `Max Value is : ${maxNum}`;
// };

// //console.log(findMaxValue([10, 70, 30, 40]));
// const Value = findMaxValue([10, 70, 30, 40]);
// console.log(Value);

// ⭐⭐ Array Declaration ⭐⭐

// 1. Using Square brackets :
// const numbers: number[] = [1, 2, 3, 4, 5, 6];

// // 2. Using array constructor :
// const numbers1: number[] = new Array (1, 2, 3, 4, 5, 6);

// // 3. Using array of methods :
// const Names: string[] = Array.of("Suraj", "Sunil", "Marathe");

// console.log(Names[2]);

// ⭐⭐ TypeScript Array map Method ⭐⭐
// The map method is an essential tool for transforming arrays in TypeScript. It creates a new array by executing a provided function for each element in the original array. In this tutorial, we'll demonstrate how to use map to perform various transformations on an array of numbers. From doubling each element to converting strings to uppercase, you'll be amazed at the versatility of the map method.

// 1. Doubling each number in array
//let Array1 = [1, 2, 3, 4, 5];
// const doubleData: number[] = Array1.map((val: number) => val * 2);
// console.log(doubleData);

// 2. Converting numbers to string
// const numToString:string[] = Array1.map((val: number) => val.toString());
// console.log(numToString);

// ⭐⭐ TypeScript Array filter Method ⭐⭐
// Next, we'll explore the filter method, which allows us to selectively extract elements from an array based on a given condition. Filtering out odd numbers, finding all words with more than five characters, or extracting specific objects based on their properties are just some of the tasks we'll tackle using the filter method.

// 1. Filtering even numbers :
//let Array2 = [1, 2, 3, 4, 5];
// const evenNumbers: number[] = Array2.filter((curElem: number) => curElem % 2 === 0);
// console.log(evenNumbers);

// 1. Filtering numbers greated than 3 :
// const numbersGreaterThan3: number[] = Array2.filter(
//   (curElem: number) => curElem > 3
// );
// console.log(numbersGreaterThan3);

// ⭐⭐ Objects ⭐⭐

// const person: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; country: string };
// } = {
//   name: "Suraj",
//   age: 24,
//   isStudent: true,
//   address: {
//     city: "Pune",
//     country: "India",
//   },
// };

// console.log(person);

// ⭐⭐ Type Aliase ⭐⭐

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   isMarried? : boolean; // Optional Property
//   address: { city: string; country: string };
// };

// const person1: Person = {
//   name: "abc",
//   age: 10,
//   isStudent: true,
//   address: {
//     city: "Pune",
//     country: "India",
//   },
// };

// const person2: Person = {
//   name: "xyz",
//   age: 20,
//   isStudent: true,
//   address: {
//     city: "Pune",
//     country: "India",
//   },
// };

// ⭐⭐ Call Signature ⭐⭐

// type Student = {
//   name: string;
//   age: number;
//   gender?: string;
//   greet: (country: string) => string;   // Method call signature
// }

// const student1: Student = {
//   name: "Suraj",
//   age: 24,
//   gender: "Male",
//   greet: (country): string =>
//     `Welcome... My name is ${student1.name}, I am ${student1.age}yrs old & I am from ${country}`
// }

// const introduction: (student1: Student) => string = (
//   student1: Student
// ): string => {
//   const { name, age } = student1;
//   return `My name is ${student1.name}, I am ${student1.age}yrs old`;
// }

// console.log(introduction(student1));
// console.log(student1.greet("India"));

// ⭐⭐ Enums ⭐⭐

// enum Roles {
//   user = "user",
//   admin = "admin",
// }

// ⭐⭐ Tuples ⭐⭐

// Defination
// type personInfo = readonly [string, number, boolean];

// // Function
// const displayPersonInfo: (person: personInfo) => void = (
//   person: personInfo
// ): void => {
//   const [name, age, hasDrivingLicense] = person;
//   console.log(
//     `Name : ${name}, Age : ${age}, Driving License : ${
//       hasDrivingLicense ? "Yes" : "No"
//     }`
//   );
// };

// // Usage
// const person1:personInfo = ["Suraj", 24, true]; // Order specific

// displayPersonInfo(person1);

// ⭐⭐ Union ⭐⭐

// const userInput = (value: string | number | boolean) => {
//   if (typeof value === "number") {
//     return value * 2;
//   } else if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "boolean") {
//     return value == true ? "Yes" : "No";
//   } else {
//     throw new Error("Invalid input data");
//   }
// };

// console.log(userInput(10));
// console.log(userInput("Hello"));
// console.log(userInput(true));
// console.log(userInput(false));

// type Person = {
//     name: string;
//     age: number;
//   };

//   type Employee = {
//     emp_id: number;
//     department: string;
//   };

//   type EmployeeDetails = Person | Employee;

//   const employee: EmployeeDetails = {
//     name: "Suraj",
//     age: 24,
//     emp_id: 1,
//     //department: "IT",
//   };

// ⭐⭐ Intersection ⭐⭐

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   emp_id: number;
//   department: string;
// };

// type EmployeeDetails = Person & Employee;

// const employee: EmployeeDetails = {
//   name: "Suraj",
//   age: 24,
//   emp_id: 1,
//   department: "IT",
// };

// ⭐⭐ intersection example with function ⭐⭐

// type User = {
//   name: string;
//   age: number;
// };

// type MyLocation = {
//   city: string;
//   country: string;
// };

// const user: User = { name: "Suraj", age: 24 };
// const mylocation: MyLocation = { city: "Pune", country: "India" };

// const createUserProfile = (user: User, location: MyLocation) => {
//   return { ...user, ...location };
// };

// const myCompleteInfo: User & MyLocation = createUserProfile(user, mylocation);
// console .log(myCompleteInfo);

// ⭐⭐ Generics ⭐⭐

// function genericsExample <T> (value : T) : T{
//     return value;
// }

// const numberResult = genericsExample<number>(100);
// const stringResult = genericsExample<string>("Hello Generics...!");
// const booleanResult = genericsExample<boolean>(true);
// console.log(`numberResult = ${numberResult}, stringResult = ${stringResult}, booleanResult = ${booleanResult}`);

// ⭐⭐ Function Overloading with Generics ⭐⭐

// function add<T, U>(a: T, b: U, c: boolean) {
//   console.log(typeof a);
//   console.log(typeof b);
//   console.log(typeof c);
// }

// const result1 = add<number, string>(5, "String", true);
// const result2 = add<string, number>("String", 5, true);

// ⭐⭐ Interface ⭐⭐

// interface Greet {
//   name: string;
//   age: number;
// }

// const greets = {
//   name: "Suraj",
//   age: 24,
// };

// ⭐⭐ Object - Oriented Programming (OOP) ⭐⭐

// ⭐⭐ Class ⭐⭐

// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
// }

// const person1: Person = new Person("Suraj", 24, ["reading", "painting"]);
// const person2: Person = new Person("Marathe", 25, ["coding", "sports"]);

// ⭐⭐ Inheritance ⭐⭐

// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }

//   introduce(): string {
//     return `Hi, I am ${this.name} and I'm ${
//       this.age
//     } years old. I love ${this.hobbies.join(", ")}.`;
//   }
// }

// class Student extends Person {
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }

//   introduce(): string {
//     return `${super.introduce()} I am in grade ${this.grade}.`;
//   }
// }

// const person1: Person = new Person("Suraj", 24, ["reading", "painting"]);
// const student1: Person = new Student("Marathe", 25, ["coding", "sports"], 10);

// console.log(student1.introduce());

// ⭐⭐ Access Modifiers ⭐⭐

// public, protected, private

// class Person {
//   public name: string;
//   protected age: number;
//   private hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
// }

// ⭐⭐ Shorthasnd properties in classes ⭐⭐

// class Person {
//   constructor(
//     public name: string,
//     protected age: number,
//     private hobbies: string[]
//   ) {}
// }

// ⭐⭐ Getters & Setters ⭐⭐

// class Person {
//   private _age: number | undefined;
//   constructor(public name: string, protected hobbies: string[]) {}

//   public set age(age: number) {
//     if (age > 150 || age < 0) {
//       throw new Error("Invalid age...");
//     }
//     this._age = age;
//   }

//   public get age() {
//     if (this._age === undefined) {
//       throw new Error("Age is not defined...");
//     }
//     return this._age;
//   }

//   introduceParent(): string {
//     return `Hi, I'm ${this.name} and I'm ${ this._age} years old. I love ${this.hobbies.join(", ")}.`;
//   }
// }

// const person1 : Person = new Person("Suraj", ["coding", "travelling"]);

// //person1.age = 512;
// person1.age = 12;

// console.log(person1.introduceParent());
// console.log(person1.age);

// ⭐⭐ Static Properties and Methods ⭐⭐

// class MathOperations {
//   public static PI: number = Math.PI;
//   public static add(num1: number, num2: number) {
//     return num1 + num2;
//   }
// }

// console.log(MathOperations.PI);
// console.log(MathOperations.add(10, 5));

// ⭐⭐ Abstract Classes ⭐⭐

// abstract class Shape {
//   constructor(protected color: string) {}

//   abstract calculateArea(): number; // declaration type 1
//   abstract displayArea: () => void; // declaration type 2
// }

// class Circle extends Shape {
//   constructor(protected color: string, protected radius: number) {
//     super(color);
//   }

//   public calculateArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   displayArea = () => {
//     console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
//   };
// }

// const circle = new Circle("red", 5);
// console.log(circle.calculateArea());
// circle.displayArea;

// ⭐⭐ Types vs. Interfaces in TypeScript ⭐⭐

// 1:
// Use custom types when you need unions, intersections, or mapped types.
// Use interfaces when defining object shapes or classes that adhere to a contract.

// 2:
// Interfaces can extend other interfaces to inherit their members.
// Custom types can use unions and intersections for more complex type compositions.

// 3:
// same Interface name trea ted as one

// ⭐⭐ Type Safety with Typeof Guards ⭐⭐

// A typeof guard in TypeScript lets you narrow down the type of a variable based on its
// runtime value. In TypeScript, type narrowing allows you to write type-safe code by
// ensuring you only operate on the correct type under certain circumstances. This is
// particularly useful with union types and generic types.

// const favHobbies = (hobby: string | string[]) => {
//   if (typeof hobby === "object" && Array.isArray(hobby)) {
//     hobby.map(() => {});
//     console.log(hobby);
//   } else {
//     console.log(hobby);
//   }
// };

// favHobbies("Coding");
// favHobbies(["Coding", "Riding"]);