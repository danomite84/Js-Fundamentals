// Math var

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
//Pi'
val = Math.E;
// Eulers Method
val = Math.round(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-3)
//absolute, never used this really.
// so if i put a negative number in it will give the positive
// or absolute number in
val = Math.pow(8, 2);
// power of ie 8 to the 2nd or 8^2
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);
console.log(val)