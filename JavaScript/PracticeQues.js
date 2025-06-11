// // Ques1: Get yser to input a number using prompt("Enter a number: "). Check if the number is multiple of 5.

// let num = prompt("Enter the number: ");

// if(num%5 === 0) {
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
// };


// // Que2: WAP swhich can give grades to students according to their scores.

// let mark = prompt("Enter mark: ");

// if(mark >= 90) {
//     console.log("Gade of Student is A");
// } else if(mark >= 80 && mark < 90) {
//     console.log("Gade of Student is B");
// }else if(mark >= 70 && mark < 90) {
//     console.log("Gade of Student is C");
// }else if(mark >= 60&& mark < 90) {
//     console.log("Gade of Student is D");
// }else if(mark >= 50 && mark < 90) {
//     console.log("Gade of Student is E");
// }else {
//     console.log("Student is Fail");
// };


// // Ques3: Print all even number from 0 to 100

// let number = prompt("ENTER NUMBER: ");

// for(let i = 1; i<=number; i++) {
//     if(i % 2 === 0) {
//         console.log("num = ",i);
//     }
// };


// /*  
//     Ques4: Create a game whwere you start with any random game number. 
//     Ask the user to keep guessing the game number until the user enters correct value
// */

// let key = 25;
// let guess = prompt("Enter any number: ");

// while(guess != key) {
//     guess = prompt("Your Guess is wrong. Try again");
// };
// console.log("Congratulations, your guess is correct");


// /* 
//     Ques5: Prompt the user to enter their full name. Generate a username for them based on the input.
//     Start username with @.followed by their full name and ending with fullname Length.

//     eg. user name = "tushardharmik", username should be "@tushardharmik".
// */

// let fullName = prompt("Enter your full name without space: ");
// let username = "@" + fullName + fullName.length;
// console.log("Username based on Entered Name is : ", username);


// /* 
//     Ques6: Forn a given array with marks of students -> [85. 97, 44, 37, 76, 60]
//     find the average marks of the entire class  
// */

// let marks = [85, 97, 44, 37, 76, 60];
// let total = 0;

// for(let val of marks) {
//     total += val;
// }

// let average = total / marks.length;
// console.log(`Average marks of the class is: ${average}`);


// /* 
//     Ques7: For a given array with the price of 5 items -> [250, 645, 300, 50];
//     All items have an offer of 10% OFF on them. Change the array to store final price after applying offer. 
// */

// let price = [250, 645, 300, 50];

// for(let idx = 0; idx<price.length; idx++ ) {
//     let offer = price[idx]/10;
//     price[idx] -= offer;
// }
// console.log(`The final price after applying offer is:[${price}]`);


// /*
//     Ques8: Create an array to store companies -> "bloomberg","Microsoft","Uber","Google","IBM","Netflix".
// // */

// let companies = [];
// companies.push("bloomberg","Microsoft","Uber","Google","IBM","Netflix");
// console.log(companies);


// /*
//     Ques9: Remove the first company from thr array.
// */

// companies.shift();
// console.log(companies);;


// /*
//     Ques10: Remove Uber & Add Ola in its Place;
// */

// companies.splice(1,1,"Ola");
// console.log(companies);

// /*
//     Ques11: Add Amazon at the end
//  */

// companies.push("Amazon");
// console.log(companies);

// /*
//     Ques12: Create a Funtion using "function" keyword taht takes a String as an argument & returns the number of vowels in the string.
// */

// function countVowels(str){
//     let count = 0;
//     s = str.toLowerCase();
//     for(let char of str){
//         if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// let num = countVowels(prompt("Enter the String"));
// console.log(`Numbers of vowels in string is: ${num}`);


// /*
//     Ques13: Write same program using Arrow Function
// */

// const count_vowels = (str) => {
//     let count = 0;
//     s = str.toLowerCase();
//     for(let char of str){
//         if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// num = count_vowels(prompt("Enter the String"));
// console.log(`Numbers of vowels in string is: ${num}`);


// /*
//     Ques14: For given array of numbers, print the aquare of each value using the forEach loop.
//  */

// let nums = [1, 2, 3, 4, 5];
// nums.forEach((val) => {
//     console.log(val*val);
// });


// /*
//     Ques14: WE are given array of marks of students. Filter out of the marks of students that scored 90.
// */

// let points = [97, 78, 85, 93 ,59, 91];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);


/*
    Ques15: Take a number n as input from user. Create an array of number of array from 1 to n.
    Use the reduce method to calculate sum of all numbers in array.
    Use the reduce method to calculate product of all numbers in array.
*/

//let n = prompt("Enter the NUMBER: ");
let n = 10;
let sum = [];
for(let i = 1; i<=n; i++) {
    sum.push(i);
}
const finalSum = sum.reduce((prev, curr) => {
    return prev + curr;
});
const finalProduct = sum.reduce((prev,curr) => {
    return prev * curr;
});
console.log(finalSum);
console.log(finalProduct);



 