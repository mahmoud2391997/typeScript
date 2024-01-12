"use strict";
let user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user.id = 200;
user.id = "200";
user.state = false;
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get getter() {
        return this._title;
    }
    set setter(v) {
        this._title = v;
    }
}
let tester = new Show("Elzero");
console.log(tester.getter);
tester.setter = "Osama";
console.log(tester.getter);
//# sourceMappingURL=task3.js.map