/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Andrew"; //declaring a variable in computer's memory
console.log(firstName) // camelcase preferred

let PI = 3.1415;

let myFirstJob = 'Trainer';
let mySecondJob = 'Recruiter';
let myCurrentJob = 'System Administrator'

console.log(myFirstJob);
console.log(mySecondJob);

// object
let me = {
    name: 'Andrew'
};

// 7 primitive data types

// number: floating point numbers > used for decimals and integers
let age = 23;

// string: sequence of characters > used for text
let lastName = 'Harvey';

// boolean: logical type that can only be true or false > used for taking decisions
let fullAge = true;

// undefined: value taken by a variable that is not yet defined ('empty value')
let children;

// null: also means 'empty value'

// Symbol (ES2015): value that is unique and cannot be changed [not useful for now]

// BigInt (ES2020): larger integers than the Number type can hold

// JavaScript has dynamic typing, maybe we do not manually have to define the data type, they are determined automatically.

let javascriptIsFun = true;
console.log(javascriptIsFun)

// typeof operator, used to show the type of a value
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof age);
console.log(typeof 'Andrew');
console.log(typeof lastName);

// do not need let after variable has already been "declared"
javascriptIsFun = 'YES!';
*/

/*

// 2.12 DECLARING VARIABLES

// let, const, var
// let is newer with const, var is older

let age = 30;
age = 31; // you can declare with let at one point then 'reassign' value later
// also known as mutate it

const birthYear = 1987; // good example because birth year can't change
//const must have an initial value

var job = 'programmer';
job = 'coder';
// var is older version of 'let', most people shouldn't use it

// below the surface 'let' and 'var' are different under the hood

// ALWAYS PROPERLY DECLARE VARIABLES, even though you don't need to

// 2.13 - BASIC OPERATORS

// const ageAndrew = 2023 - 1987;
// console.log(ageAndrew);

// const ageCallie = 2023 - 1992;
// console.log(ageCallie);

// Math Operators
const currentYear = 2023
const ageAndrew = currentYear - 1987;
const ageCallie = currentYear - 1992;
console.log(ageCallie, ageAndrew);

console.log(ageAndrew * 2, ageAndrew / 2, ageAndrew ** 2);
// ** = to the power of = exponents

// concatenate
const firstName = 'andrew';
const lastName = 'harvey';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);
// template strings are better at doing above, will learn later

// ASSIGNMENT OPERATORS
let x = 10 + 5;
console.log(x);
// equal sign

x += 10; // x = x + 10
console.log(x);

x -= 10; // x = x - 10
console.log(x);

x *= 4; // x = x * 4
console.log(x);

x++; // x = x + 1
// good for counters
console.log(x);

x--; // x = x - 1
console.log(x);

// COMPARISON OPERATORS
console.log(ageAndrew > ageCallie);
// boolean comparison, equals true

*/

// 2.14 OPERATOR PRECEDENCE
