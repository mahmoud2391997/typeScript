// Write Your Code Here
type n = number
// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Write Your Code Here
type mix = number | boolean;
// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
// Write Your Code Here
type Info = {
    theName: string,
    theAge: number
}
type extra = {
    country: string
}
type Full = Info & extra;
// Do Not Edit Here
function showInfo(data: Info) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
  }
  console.log(showInfo({ theName: "Elzero", theAge: 40 }));
  
  function showFullInfo(data: Full) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
  }
  console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
  

  function yesOrNo(val: number | boolean | string) : "Yes" | "No" {
     if(+val > 10){
return "Yes"
    } else {
        return "No";
    }
  }
  
  // Do Not Edit Here
  console.log(yesOrNo("100")); // Error
  console.log(yesOrNo(30)); // True
  console.log(yesOrNo(8)); // False


  function isHeOld(age: number | string) : "Yes" | "No" | "Error" {
    if( typeof age === "number"){
        if(age > 40){
            return "Yes"
        } else {
            return "No"
        }
       
            } else {
                return "Error";
            }   }
  
  // Do Not Edit Here
  console.log(isHeOld("100")); // Error
  console.log(isHeOld(45)); // "Yes"
  console.log(isHeOld(30)); // "No"




 
let post = [100, "Title", true]; // Good

// Create Destructuring Here
let [id,title,state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true


// Create Enums + Function Here
// enum Game {
//     Easy = 100,
//     Medium = 80,
//     Hard = 30,
//     Insane = 20
// }
// Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20




// const user: {
//      username: string,
//     age: number | string,
//     website?: string,
//     skills: {
//       frontEnd: string[],
//       backEnd: any[]
//     }
//   } = {
//     username: "Elzero",
//     age: 40,
//     website: "Elzero.org",
//     skills: {
//       frontEnd: ["HTML", "CSS", "JS"],
//       backEnd: ["PHP", "Python"]
//     }
//   }
  
//   // We Need To Remove Error From This Edits
//   user.username = "Osama";
//   user.age = "40";
//   user.skills.backEnd.push(100);