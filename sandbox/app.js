//Conversions
let val;

// Number to string;

// val = 5;
val = String(555);
val = String (4+4);
//Boolean
val = String(true);
//Date to string
val = String(new Date());
//Array to string
val = String([1,2,3,4]);
// toString();
val= (5).toString();
val = (true).toString();
// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
// parse integer
val = parseFloat('100.30');
// Float default gives 1 decimal.
// using toFixed will add as many extensions after the decimal

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));
// New one for me .toFixed will add a decimal point but only works
// on numbers. if u add it to a string will create an error

//Type cohersion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);