/*  Learning About Class And Objects in JS  */


//Object
const employe  = {
    calTax() {
        console.log("Tax rate is 10% which is : ");
    },
};

const karan = {
    salary : 5000,
};

karan.__proto__ = employe;


// Class

class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    };

    setbrand(brand) {
        this.brandName = brand;
    }
};


let fortuner = new ToyotaCar();
fortuner.setbrand("fortuner");
let lexus = new ToyotaCar();
lexus.setbrand("fortuner");

class ToyotaCar {
    constructor(brand) {
        console.log("crating new object");
        this.brand = brand;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    };

    setbrand(brand) {
        this.brandName = brand;
    }
};

let jagur = new ToyotaCar();
let rollsRoyals = new ToyotaCar();


// Inheritance
class Parent {
    hello() {
        console.log("Hello");
        super();
    };
};

class Child extends Parents{}
let obj = new Child();