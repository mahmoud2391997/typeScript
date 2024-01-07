// console.log(Math.floor(10.55));
// let num = 10;
// num = "Elzero";
// console.log(num);

// let age = 40;
// if (age > 30) {
//   console.log("Good");
// } else {
//   console.log(age.repeat(3));
// }
/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/

// let theName = "Elzero";
// let theAge: number = 40;
// let hire: boolean = true;
// let all: any = "Elzero Web School";
// let allVars; // Any

// theName = "Osama";
// all = 100;

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// console.log(add(10, 20));
// console.log(typeof add(10, 20));

// function add(n1: number, n2: string) {
//   return n1 + n2;
// }

// // console.log(add(10, "20"));
// console.log(typeof add(10, "20"));
/*
  Type Annotations With Arrays
*/

// let all: string | number | boolean = "Osama";

// all = "A";
// all = 100;
// all = true;

// let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i].repeat(3));
// }
/*
  Type Annotations With Multidimensional Arrays
*/

// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["A", "B", "C"];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

// let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
// console.log(arrayFour);
/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/

// let showMsg = true;

// function showDetails(name: string, age: number, salary: number) : string {
//   let test = 10;
//   if (showMsg) {
//     return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
//   }
//   return `No Data To Show`;
// }

// console.log(showDetails("Osama", 40, 5000));
/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

// function addAll(...nums: number[]) : number {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
//   }
//   // nums.forEach((num) => result += num);
//   return result;
// }

// console.log(addAll(10, 20, 30, 100, 10.5, +true));
/*
  Function
  - Anonymous Function
  - Arrow Function
*/

const add = function(num1: number, num2: number) : number {
  return num1 + num2;
}

console.log(add(10, 20));

const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

console.log(addWithArrow(10, 20));