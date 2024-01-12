// Do Not Edit
type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// Start Edit And Fix
// class RPG extends Game {
//   constructor(public title: string, public price: numandstring, public rate: number) {
//     super(title,price)
//   }
//   getLocation():string{
// return `Location`;
// }
// getDiscount(){
//     return `Discount`;
    
//   }
  
// }

// class Action extends Game {
//     constructor(public title: string, public price: numandstring, public rate: number,public company:string) {
//         super(title,price)
//     }
    
//     getLocation():string{
//     return `Location`;
//     }
//     getDiscount(){
//       return `Discount`;
      
//     }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"
// Write Function Code Here
// Write Function Code Here
function showTypes<T = string, U = string, V = string>(arg1: T = "Nothing" as T, arg2: U = "Nothing" as U, arg3: V = "Nothing" as V): string {
    return `${arg1} - ${arg2} - ${arg3}`;
  }
  
  // Do Not Edit Here
  console.log(showTypes()); // Nothing - Nothing - Nothing
  console.log(showTypes<string>("String")); // String - Nothing - Nothing
  console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
  console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
  // Write Class Code Here
class Game<T>{
 constructor(public title: T,public price: number){

 }
 getDiscount(val){
return console.log(`the Discount is ${+val}`)
 }
}
// Do Not Edit Here
let gameOne = new Game<string>("Ys", 100);
let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"