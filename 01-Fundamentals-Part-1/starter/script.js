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