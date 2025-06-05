/* Learning Functions in JS  */


// Function
function sum(x,y){
    s = x + y;
    return s;
}
let val = sum(2,5);
console.log(val);

function mul(x,y){
    m = x * y;
    return m;
}
val = mul(2,5);
console.log(val);


// Arrow Function
const arrowSum = (a,b) => {
    console.log(a + b);
};

const arrowMul = (x, y) => {
    console.log(x*y);
}
