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





function getAge() {
    return 190;
}


function utility(name = "Love", age = getAge()) {
   console.log(name, " ", age); 
}

utility();





// function solve(value = "Rahul") {
//     console.log("HELLO JII -> ", value);
// }
// solve(undefined);
// function sayName(fName = "Uday", lName = fName.toUpperCase()) {
//     console.log("My Name is: ", fName," ", lName);
// }

// sayName("Love");





// class Human {
//     //properties
//     age; // public
//     #wt = 80; //private
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }


//     //behaviour

//     #walking(){
//         console.log("I am Walking ", this.#wt);
//     }

//     running() {
//         console.log("I am running")
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }

// let obj = new Human(50, 190,101);
// console.log(obj.fetchWeight);

// obj.walking();