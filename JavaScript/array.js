/* Learning Array in JS  */

let heroes = ["ironman", "spiderman","superman", "thor", "hulk", "Captain america", "Black panter"];
let marks = [98, 67, 89, 33, 56];

// for loop

for( let i = 0; i<heroes.length; i++) {
    console.log(heroes[i]);
};

console.log(" ");

// for of loop

for(let hero of heroes) {
    console.log(hero);
}

// str.push()
heroes.push("Antman", "Captain America");
console.log(heroes);

//str.pop()
let Deleted_hero = heroes.pop();
console.log(heroes);
console.log(`Deleted Hero i: ${Deleted_hero}`);

// Array to String
let stringHeroes = heroes.toString();
console.log(`After converting array to string: ${stringHeroes}`)

// str.concat()
let newArr = heroes.concat(marks);
console.log(`After Concatination of Array : ${newArr}`);

// Unshift
let marvelHeroes = ["ironman","thor","captain america","Hawkeye","spiderman"];
marvelHeroes.unshift("Antman");
console.log(marvelHeroes);

// Shift
marvelHeroes.shift();
console.log(marvelHeroes);

// Slice
console.log(`After slicing : [${marvelHeroes.slice(2,4)}]`);

// forEach in Array
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function add(val){
    console.log(val + 0.5);
});
arr.forEach((val) => {
    console.log(val*2);
});

// Maps in Array
let newArray = nums.map((val) => {
    return val+5;
});
console.log(newArray);


// Filter in Array
newArray = arr.filter((val) => {
    return val%2 === 0;
});
console.log(newArray);


// reduce in Array
let add = [1, 2, 3, 4];
const output = add.reduce((res, curr) => {
    return res + curr;
});
console.log(output);