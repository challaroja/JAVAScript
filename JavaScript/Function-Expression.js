//Function Expressions 
const greetings = function(language) {
    if (language === "English") {
        return function() {
            console.log("Hello");
        };
    } else if (language === "Spanish") {
        return function() {
            console.log("Hola");
        };
    } else {
        return function() {
            console.log("Language not supported");
        };
    }
};

const englishLanguageGreeting = greetings("English");
const spanishLanguageGreeting = greetings("Spanish");
const unknownLanguageGreeting = greetings("French");

englishLanguageGreeting();  // Output: Hello
spanishLanguageGreeting();  // Output: Hol
unknownLanguageGreeting();  // Output: Language not supported
