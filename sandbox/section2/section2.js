// console.log ("hello world");
// console.log(123);
// const greeting = 'helllloooo world';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is some error');
// console.warn('warrrrning');
// console.clear();
// console.time('Hello')
//     console.log ("hello world");
//     console.log ("hello world");
//     console.log ("hello world");
//     console.log ("hello world");
//     console.log ("hello world");
// console.timeEnd('Hello');

// var, let, const

// var name = 'Jogn Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// vars can only have letters, numbers, _, $
// Can not start with number
// var $name = 'John';
// wont work unless using it for jQuery
var _name = 'john'
// not best practice

// Multi word vars

var firstName = 'John'; // Camel case ****** best practice
var first_name = 'Sara' // underscore method
var FirstName = 'Tom' // Pascal case *** good for OSS
var firstname; // not awesome

// let
// works similar to var
let name = 'Jogn Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// Can not reassign 
// name = 'Sara'
// Have to assign a value
// const greeting; does not work!

const person = {
    name: 'John',
    age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers)

// PRIMITIVE AND REFERENCE TYPES
// Primitive Type

//String
const name = 'John Doe';

console.log(typeof name)

// Number
const age = 45;
console.log(typeof age)
//Boolean
const hasKids = true;
console.log(typeof hasKids);

// Null
const car = null;
// funny its been a bug of null since the beginning of js

//Undefined
let test;

// Symbol
const sym = Symbol();

// REFERENCE TYPES - OBjects
const hobbies = ['movies', 'music'];
//Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
const today = new Date();

console.log(today);
console.log(typeof today);

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