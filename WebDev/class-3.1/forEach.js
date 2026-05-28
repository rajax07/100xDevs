//     forEach()
// number.forEach( CALLBACK_FUNCTION );

// forEach allows you to iterate over each element in an array and perform an operation on each element.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});

// using an arrow function in forEach
num.forEach((number) => {
    console.log(number * 2);
});

// shorthand:
// using an arrow function in forEach
// If arrow function has:
// only ONE parameter
// then parentheses are optional.
let num = [1, 2, 3, 4, 5];
num.forEach(number => console.log(number * 2));

// The callback function in forEach can actually take up to three arguments: the current element, the index of the current element, and the array that forEach was called upon.
// Example:
// Element: 1  ,first argument is mandatory and last two are optional
// Index: 0
// Array: [1,2,3,4,5]