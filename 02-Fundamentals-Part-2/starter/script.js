// // BOOLEAN LOGIC

// // const hasDriversLicense = true; // variable A
// // const hasGoodVision = true; // variable B

// // console.log(hasDriversLicense && hasGoodVision); // && = AND
// // console.log(hasDriversLicense || hasGoodVision); // || = OR
// // console.log(!hasDriversLicense);

// // // const shouldDrive = hasDriversLicense && hasGoodVision

// // // if(shouldDrive) {
// // //     console.log('Sarah is able to drive!');
// // // } else {
// // //     console.log('Someone else should drive...');
// // // }

// const isTired = true; // variable C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired

// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// THE SWITCH STATEMENT
// like another form of if statement

// const day = 'wednesday';

// switch(day) {
//     case 'monday': // day == 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break
//     case 'tuesday': // day == 'tuesday'
//         console.log('Go to gym');
//         break
//     case 'wednesday': // day == 'wednesday'
//     case 'thursday': // day == 'thursday' (or wednesday since no break)
//         console.log('Do some work');
//         break
//     default: // this is like an else statement
//         console.log('Not a valid day!');
// }

// // CHALLENGE! 

// if(day === 'monday') {
//     console.log('Plan couse structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Go to gym');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Do some work');
// } else {
//     console.log('Not a valid day!')
// }

// STATEMENTS AND EXPRESSIONS

// simple expressions (produce a value)
3 * 4
1991
true && false && !false

// statements (do not produce a value)
// they perform actions, the action may be an expression though
if (23>10) {
    const str = '23 is bigger';
}

