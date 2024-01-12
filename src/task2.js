// Do Not Edit Here
var myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Do Not Edit Here
var myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
// Do Not Edit Here
function showInfo(data) {
    console.log("The Name Is ".concat(data.theName));
    console.log("The Age Is ".concat(data.theAge));
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log("The Name Is ".concat(data.theName));
    console.log("The Age Is ".concat(data.theAge));
    console.log("The Country Is ".concat(data.country));
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    if (+val > 10) {
        return "Yes";
    }
    else {
        return "No";
    }
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (typeof age === "number") {
        if (age > 40) {
            return "Yes";
        }
        else {
            return "No";
        }
    }
    else {
        return "Error";
    }
}
// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
var post = [100, "Title", true]; // Good
// Create Destructuring Here
var id = post[0], title = post[1], state = post[2];
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = 20] = "Insane";
})(Game || (Game = {}));
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
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
