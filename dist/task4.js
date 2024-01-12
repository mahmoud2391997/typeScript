"use strict";
function showTypes(arg1 = "Nothing", arg2 = "Nothing", arg3 = "Nothing") {
    return `${arg1} - ${arg2} - ${arg3}`;
}
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(val) {
        return console.log(`the Discount is ${+val}`);
    }
}
let gameOne = new Game("Ys", 100);
let gameTwo = new Game(2064, 100);
console.log(gameOne.title);
console.log(gameOne.price);
gameOne.getDiscount("50");
console.log(gameTwo.title);
console.log(gameTwo.price);
gameTwo.getDiscount(80);
//# sourceMappingURL=task4.js.map