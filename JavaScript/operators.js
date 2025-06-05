/* Learning about Various Operators */

/*  Arithmetic Operators */
let x = 5;
let y = 3;
let o = "5";
console.log("x = ", x, ", y = ", y, "o = ", o);

// Addition
let a = x+y;
console.log("x + y = ", a);

// Substraction
let s = x-y;
console.log("x - y = ", s);

// Multiplication
let m = x*y;
console.log("x * y = ", m);

// Division
let d =x/y;
console.log("x / y = ", d);

// Remainder
let r = x%y;
console.log("x % y = ", r);

// Exponentiation
let e = x**y;
console.log("x ** y = ", e);

/* Comparsion Operators */

console.log("5 == 3 : ", x==y);
console.log("5 <= 3 : ", x<=y);
console.log("5 >= 3 : ", x>=y);
console.log("5 != 3 : ", x!=y);
console.log("5 > 3 : ", x>y);
console.log("5 < 3 : ", x<y);
console.log("'5' == 5 : ", x==o);
console.log("'5' === 5 : ", o===x);
console.log("'5' !== 5 : ", o!==x);


/* Uinary Operator */

let n = 5;
let v = 3;
console.log("n = ", n, ",  v = ",v);

// Increment Operator
v = v+1; 
n++;
console.log("v + 1 = ",v);
console.log("n++ = ",n)

// Decrement Operator

let z = 5;
let q = 3;
console.log("z = ", z, ",  q = ", q);

z = z-1;
q--;
console.log("z - 1 =", z);
console.log("q-- =", q);


/* Assignment Operator */

let h = 10;
console.log("h = ",h);

console.log("h += 3 = ", h+=3);
console.log("h -= 3 = ", h-=3);
console.log("h *= 3 = ", h*=3);
console.log("h /= 3 = ", h/=3);
console.log("h %= 3 = ", h%=3);
console.log("h **= 3 = ", h**=3);

/* Logical Operators */

let w = 2;
let f = 3;
console.log("w = ", w,",  f = ", f);

console.log("2 AND 3 = ", w&&f);
console.log("2 OR 3 = ", w||f);
console.log("!(2 < 3) = ", !(w<f));

