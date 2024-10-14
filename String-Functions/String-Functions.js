//String Functions

let title=" WelCome To FrontEnd Technologies ";
//ChatAt(index)Returns the character at the specified index.
console.log(title.charAt(0)); // ' '
console.log(title.charAt(7)); // 'e'
//charCodeAt(index)
console.log(title.charCodeAt(0)); // 32 (Unicode for space)
console.log(title.charCodeAt(7)); // 101 (Unicode for 'e')
//concat(...strings)
let newTitle = title.concat(" - Learn More About That Skills");
console.log(newTitle); // ' WelCome To FrontEnd Technologies - Learn More About That Skills'
// includes(searchString, position)
console.log(title.includes("FrontEnd")); // true
console.log(title.includes("Backend")); // false
//indexOf(searchString, startIndex)
console.log(title.indexOf("To")); // 9
console.log(title.indexOf("Tech")); // 21
//lastIndexOf(searchString, startIndex)
console.log(title.lastIndexOf(" ")); // 33 (last space in the string)
//localeCompare(compareString)
console.log(title.localeCompare("Hello")); // -1
//match(regexp)
console.log(title.match(/[A-Z]/g)); // ['W', 'C', 'T', 'F', 'E', 'T']
//repeat(count)
console.log(title.repeat(2)); // ' WelCome To FrontEnd Technologies  WelCome To FrontEnd Technologies '
//replace(searchValue, newValue)
console.log(title.replace("FrontEnd", "BackEnd")); // ' WelCome To BackEnd Technologies '
//replaceAll(searchValue, newValue)
console.log(title.replaceAll(" ", "-")); // '-WelCome-To-FrontEnd-Technologies-'
//search(regexp)
console.log(title.search("FrontEnd")); // 12
//slice(startIndex, endIndex)
console.log(title.slice(7, 12)); // 'e To'
console.log(title.slice(0, 5)); // ' WelC'
//split(separator, limit)
console.log(title.split(" ")); //  ['', 'WelCome', 'To', 'FrontEnd', 'Technologies', '']
console.log(title.split(" ", 3)); // ['', 'WelCome', 'To']
//startsWith(searchString, position)
console.log(title.startsWith(" WelCome")); // true
console.log(title.startsWith("To")); // false
//endsWith(searchString, length)
console.log(title.endsWith("Technologies")); // false
console.log(title.endsWith("Tech")); // false
//substring(startIndex, endIndex)
console.log(title.substring(7, 12)); // 'e To '
console.log(title.substring(0, 5)); // ' WelC'
//toLowerCase()
console.log(title.toLowerCase()); // ' welcome to frontend technologies '
//toUpperCase()
console.log(title.toUpperCase()); // ' WELCOME TO FRONTEND TECHNOLOGIES '
//trim()
let trimmedTitle = title.trim();
console.log(trimmedTitle); // 'WelCome To FrontEnd Technologies'
//trimStart() (or trimLeft())
let trimmedStart = title.trimStart();
console.log(trimmedStart); // 'WelCome To FrontEnd Technologies '
//trimEnd() (or trimRight())
let trimmedEnd = title.trimEnd();
console.log(trimmedEnd); // ' WelCome To FrontEnd Technologies'
//toLocaleLowerCase()
console.log(title.toLocaleLowerCase()); // ' welcome to frontend technologies '
//toLocaleUpperCase()
console.log(title.toLocaleUpperCase()); // ' WELCOME TO FRONTEND TECHNOLOGIES '
//padStart(targetLength, padString)
console.log(title.padStart(50, "*")); // '************************* WelCome To FrontEnd Technologies '
//padEnd(targetLength, padString)
console.log(title.padEnd(50, "*")); // ' WelCome To FrontEnd Technologies *************************'
//fromCharCode() (Static method)
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // 'Hello'
//codePointAt(index)
console.log(title.codePointAt(0)); // 32 
console.log(title.codePointAt(7)); // 101 (Unicode for 'C')
//repeat(count)
console.log(title.repeat(2)); // ' WelCome To FrontEnd Technologies  WelCome To FrontEnd Technologies '

















