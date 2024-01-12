"use strict";
let myData;
myData = 1000;
myData = +true;
let myInfo;
myInfo = 1000;
myInfo = true;
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
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
console.log(yesOrNo("100"));
console.log(yesOrNo(30));
console.log(yesOrNo(8));
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
console.log(isHeOld("100"));
console.log(isHeOld(45));
console.log(isHeOld(30));
let post = [100, "Title", true];
let [id, title, state] = post;
console.log(id);
console.log(title);
console.log(state);
//# sourceMappingURL=task2.js.map