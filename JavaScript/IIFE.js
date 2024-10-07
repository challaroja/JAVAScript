//IIFE immediately invoking function
//IFFE for creating a private space
console.log("IIFE immediately invoking function")

const message = " This Is Global Msg";

(function(globalMessage) {
    const localMessage = " This Is IIFE Msg";
    
    console.log(globalMessage);  // Output: This IS Global Msg
    console.log(localMessage);   // Output: This Is IIFE Msg
})(message);
