"use strict";
function printInConsole(...args) {
    args.forEach(element => {
        console.log(`The Value Is ${element} And The Type Is ${typeof element}`);
    });
    return "Done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=task1.js.map