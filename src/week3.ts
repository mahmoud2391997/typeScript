/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

// interface User {
//     id?: number,
//     readonly username: string,
//     country: string
//   }
  
//   let user: User = {
//     id: 100,
//     username: "Elzero",
//     country: "Egypt"
//   }
  
//   user.country = "Syria";
  
//   console.log(user);
  
//   function getData(data: User) {
//     console.log(`Id Is ${data.id}`);
//     console.log(`Username Is ${data.username}`);
//     console.log(`Country Is ${data.country}`);
//   }
  
//   getData({ id: 200, username: "Osama", country: "KSA" });
  /*
  Interface
  - Interface Method And Parameters
*/

// interface User {
//     id: number;
//     username: string;
//     country: string;
//     sayHello() : string;
//     sayWelcome: () => string;
//     getDouble(num: number) : number;
//   }
  
//   let user: User = {
//     id: 100,
//     username: "Elzero",
//     country: "Egypt",
//     sayHello() {
//       return `Hello ${this.username}`;
//     },
//     sayWelcome: () => `Welcome ${user.username}`,
    
//     getDouble(n) {
//       return n * 2;
//     }
//   }
  
//   console.log(user.id);
//   console.log(user.sayHello());
//   console.log(user.sayWelcome());
//   console.log(user.getDouble(100));
 /*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
// interface Settings {
//     readonly theme: boolean;
//     font: string;
//   }
  
//   // Articles Page
//   interface Settings {
//     sidebar: boolean;
//   }
  
//   // Contact Page
//   interface Settings {
//     external: boolean;
//   }
  
//   let userSettings: Settings = {
//     theme: true,
//     font: "Open Sans",
//     sidebar: false,
//     external: true
//   }
//   /*
//   Interface
//   - Extending Interfaces
// */

// interface User {
//     id: number;
//     username: string;
//     country: string;
//   }
  
//   interface Moderator {
//     role: string | number;
//   }
  
//   interface Admin extends User,Moderator {
//     protect?: boolean;
//   }
  
//   let user: Admin = {
//     id: 100,
//     username: "Elzero",
//     country: "Egypt",
//     role: "Mod",
//     protect: true
//   }
  
//   console.log(user.id);
  /*
  Interface
  - Interface vs Type Aliases
  - Take A Look On HTMLElement Interface
*/


// Homepage
// type Settings = {
//   readonly theme: boolean;
//   font: string;
//   sidebar: boolean;
//   external: boolean;
// }

// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true
// }
/*
  Type Annotations With Class
*/

// class User {
//     u: string;
//     s: number;
//     msg: () => string;
//     constructor(username: string, salary: number) {
//       this.u = username;
//       this.s = salary;
//       this.msg = function () {
//         return `Hello ${this.u} Your Salary Is ${this.s}`;
//       }
//     }
//     sayMsg() {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     }
//   }
  
//   let userOne = new User("Elzero", 6000);
  
//   console.log(userOne.u);
//   console.log(userOne.s);
//   console.log(userOne.msg());
//   console.log(userOne.sayMsg());
  /*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

// class User {
//   msg: () => string;
//   constructor(private username: string, protected salary: number,public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.username} Your Salary Is ${this.salary}`;
//   }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// // console.log(userOne.username);
// // console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());
/*
  Class
  - Get And Set Accessors
*/

// class User {
//     public get username(): string {
//       return this._username;
//     }
//     public set username(value: string) {
//       this._username = value;
//     }
//     msg: () => string;
//     constructor(private _username: string, public salary: number, public readonly address: string) {
//       this.msg = function () {
//         return `Hello ${this._username} Your Salary Is ${this.salary}`;
//       }
//     }
//     sayMsg() {
//       return `Hello ${this._username} Your Salary Is ${this.salary}`;
//     }
//     // get username() : string {
//     //   return this._username;
//     // }
//     // set username(value: string) {
//     //   this._username = value;
//     // }
//   }
  
//   let userOne = new User("Elzero", 6000, "Cairo");
  
//   console.log(userOne.username);
//   userOne.username = "Ahmed";
//   console.log(userOne.username);
//   console.log(userOne.salary);
//   console.log(userOne.msg());
//   console.log(userOne.sayMsg());
  /*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

// class User {
//   private static created: number = 0;
//   static getCount() : void {
//     console.log(`${this.created} Objects Created`);
//   }
//   constructor(public username: string) {
//     User.created++;
//   }
// }

// let u1 = new User("Elzero");
// let u2 = new User("Web");
// let u3 = new User("School");
// // console.log(User.created);
// User.getCount();
/*
  Class
  - Implement Interface
*/

interface Settings {
  theme: boolean;
  font: string;
  save(): void;
}

// class User implements Settings {
//   constructor(public username: string, public theme: boolean, public font: string) {}
//   save(): void {
//     console.log(`Saved`);
//   }
//   update(): void {
//     console.log(`Updated`);
//   }
// }

// let userOne = new User("Elzero", true, "Open Sans");

// console.log(userOne.username);
// console.log(userOne.font);

// userOne.save();
// userOne.update();