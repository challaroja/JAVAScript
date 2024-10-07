// Higher Order Function
// Takes another function as argument
// Return a function
// Takes another function as argument and returns a functions

// Higher Order Functions
console.log("This is  Higher Order Functions");

function processData(callback) {
    const data = [1, 2, 3, 4];
    callback(data);
}

processData(arr => console.log(arr.map(x => x * 2)));  // Output: [2, 4, 6, 8]

// Takes another function as argument
function executeFunction(Fn) {
    Fn();
}

executeFunction(() => console.log("Takes another function as argument"));  // Output:Takes another function as argument

// Return a function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));  // Output: 10

// Takes another function as argument and returns a functions
function wrapFunction(fn) {
    return function(...args) {
        console.log("Takes another function as argument and returns a Function is being called...");
        return fn(...args);
    };
}

const greets = name => `Hello, ${name}!`;

const wrappedGreet = wrapFunction(greets);
console.log(wrappedGreet("ROJA"));  // Output: Hello, ROJA!

