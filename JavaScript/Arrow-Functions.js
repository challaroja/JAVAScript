// Arrow Functions
const greet = () => {
    console.log("Welcome to  Arrow Function");
};

greet();  // Output:Welcome to  Arrow Function

// Arrow Functions with  a Single Statement
console.log("Arrow function with a Single statement");
const square = x => x * x;
console.log(square(9));  // Output: 81

//Arrow Function With a Multiple Statements
console.log("Arrow Function with  a Multiple Statements")
const boxArea = (length, width) => {
    const area = length * width;
    return area;
};

console.log(boxArea(5, 3));  // Output: 15

// Arrow Function with Callback
console.log("Arrow Function with Callback Loading....")
console.log("Loding...");

setTimeout(() => {
    console.log("This Is Arrow function with Callback ");
}, 2000);






//Returning an Object 
const createPersonName = (name, age) => ({
    name: name,
    age: age,
    greet: () => {
        console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
    }
});

const personName = createPersonName("Priya", 20);
console.log(personName);  // Output: { name: 'Bob', age: 20, greet: [Function: greet] }
personName.greet();  // Output: Hello, my name is Priya and I'm 20 years old.





