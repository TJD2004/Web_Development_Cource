/* Learning about Loops in JS  */

// for loop
let size = prompt("Enter Number: ");
let sum = 0;

for(let i = 1; i <= size; i++) {
    sum = sum + i;
}
console.log("Sum of ",size ,"number is ",sum);


// while loop
let m = 1;
let i = 1;
while(i <= size) {
    m =m * i;
    i++;
}
console.log("Multiplication of ",size ,"number is ",m);


// do-while loop
do {
    console.log("i = ",i);
    i++;
} while (i <= 5);


//for-of loop
let str = "GreatestHero";
console.log("String : ",str);
let count1 = 0;
for(let i of str) {
    // console.log("str = ",i);
    count1++;
}
console.log("Length of string is ",count1);


//for-in loop
let student = {
    name : "Rahul",
    age: 20,
    cgpa: 8.0,
    isPass: true
};
for(let key in student) {
    console.log("key = ",key , "  value = ",student[key]);
};