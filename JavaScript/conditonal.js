/* Learning Conditional Statement in JS  */

// if statement

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log("color = ",color);


// if-else statement 

let age = 25;
console.log("age = ", age);

if (age > 18) {
    console.log("You are Eligable for Vote");
}else {
    console.log("You are Not Eligable for Vote");
}


// else -if statement

if (age < 18) {
    console.log("Junior");
}else if (age > 18 && age <60){
    console.log("Middle");
}else {
    console.log("Senior");
}

let height = 5.5;
console.log("height  = ", height);

let result = height >= 5 ? "Tall" : "Short";
console.log(result);

let day = "Monday";
console.log("Day : ", day);

let day2 = "Tuesday";
console.log("Day2 : ", day2);

switch(day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Monday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturady");
        break;
    case "Sunady":
        console.log("Today is Sunady");
        break;
};


switch(day2) {
    case "Monday":
        console.log("Tomorrow is Monday");
        break;
    case "Tuesday":
        console.log("Tomorrow is Tuseday");
        break;
    case "Wednesday":
        console.log("Tomorrow is Wednesday");
        break;
    case "Thursday":
        console.log("Tomorrow is Thursday");
        break;
    case "Friday":
        console.log("Tomorrow is Friday");
        break;
    case "Saturday":
        console.log("Tomorrow is Saturady");
        break;
    case "Sunady":
        console.log("Tomorrow is Sunady");
        break;
};