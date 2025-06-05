/* Learning about String in JS  */

let fullName = "Tushar Dharmik";
console.log("Full Name: ",fullName);
console.log("Length of name is: ",fullName.length);
console.log("Element at 0 index is: ",fullName[0])
console.log("Element at 7 index: ",fullName[7]);
console.log("Type of name is: ",typeof fullName);



let obj = {
    item : "pen",
    price : 10
};
let output = `The cost of ${obj.item} is Rs.${obj.price}`;
console.log(output);
console.log(typeof output);



let str = "   Bruce Wanne   ";
console.log("String = ", str)
str = str.toUpperCase();
console.log("Convert all character of string in upper case : ",str);
str = str.toLowerCase()
console.log("Convert all character of string in lower case : ",str);
str = str.trim();
console.log("Removing whitespaces from string : ",str);


let numStr = "0123456456";
console.log("Before Slicing : ", numStr);
console.log("After Slicing : ", numStr.slice(3,7));

let str1 = "Dhyanesh";
console.log("String 1 : ", str1);

let str2 = "Dharmik";
console.log("String 2 : ", str2);

let result1 = str1.concat(str2);
console.log("New String : ", result1);

let result2 = str2.concat(str1);
console.log("New String : ", result2);

let newString = result1.replace("Dhyanesh", "Janardan");
console.log("Ater Replacement : ", newString);
console.log("Character at 8 Index is : ", newString.charAt(8));