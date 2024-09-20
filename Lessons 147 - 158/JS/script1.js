/*
function Car(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
}
*/

class Car {
    static carCount = 0;
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
        this.carNo = ++Car.carCount;
    }
    getDetails() {
        console.log(`Car ${this.carNo} Name Is ${this.n} And Model Is ${this.m} And The Price Is ${this.p}`);
    }
    run() {
        console.log(`Car Is Running Now`);
    }
    stop() {
        console.log(`Car Is Stopped`);
    }
}

let car1 = new Car("MG", 2022, 420_000);
car1.getDetails();
car1.run();

let car2 = new Car("Chevrolet", 2013, 200_000);

let car3 = new Car("Mercedes-Benz", 2024, 1_000_000);

// Needed Output
/*
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
*/