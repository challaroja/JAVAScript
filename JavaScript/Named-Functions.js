// Named Functions or Function Declarations
    // Without argument and without return type
    // With argument/parameters and without return type
    // With return type and with arguments/parameters
    // without argument and with return type


// function functionName(arguments) {  }
// Without argument and without return type
function sayHello() {
    console.log("Welcome to Named Functions  ");
}

sayHello();  // Output:Welcome to Named Functions

// With argument/parameters and without return type
    function fullName(Fname,Lname) {
        console.log(Fname + Lname);
    }
    
    fullName('Roja', 'Priya');  // Output: RojaPriya

//With return type and with arguments/parameters
function multiply(valueOne,valueTwo) {
    return valueOne*valueTwo;
}

console.log(multiply(2, 2));  // Output: 4

// without argument and with return type

function currentBill() {
    return 3030.14159;
}

console.log(currentBill());  // Output: 3030.14159





    