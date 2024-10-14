//Array-Functions or Methods

let names=['Priya','Sravani','Rose','Mani','Anu','Prani','Honey'];
//Basic Array Operations
//length of an array
let lengthOfArray=names.length; 
//insert into an array using push()
//let insertNames=names.push('Priya');
names.push('Nani');
console.log(names); // ['Honey', 'Prani', 'Mani', 'Rose', 'Sravani', 'Priya', 'Nani']

//delete an iteam from array using pop()
//let deleteFirstNames=names.pop();
let lastName = names.pop();
console.log(lastName); // 'Nani'
console.log(names); // ['Honey', 'Prani', 'Mani', 'Rose', 'Sravani', 'Priya']

//inert into an array brgining using unshift
//let fruitsNames=names.unshift('Moon');
names.unshift('Anna');
console.log(names); // ['Anna', 'Prani', 'Mani', 'Rose', 'Sravani', 'Priya']

//delete into an beginig array using shift
let deleteNames=names.shift();
let firstName = names.shift();
console.log(firstName); // 'Honey'
console.log(names); // ['Prani', 'Mani', 'Rose', 'Sravani', 'Priya']

//Iterating Over Arrays
//using forEach(callback)
names.forEach(function(name) {
  console.log(name);
});
//using maps in array 
let upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames); // ['PRIYA', 'SRAVANI', 'ROSE', 'MANI', 'ANU', 'PRANI', 'HONEY']
//using filter in array
let shortNames = names.filter(name => name.length <= 4);
console.log(shortNames); // ['Rose', 'Anu']
//using reduce in array
let combinedNames = names.reduce((acc, name) => acc + ' ' + name, '');
console.log(combinedNames); // 'Priya Sravani Rose Mani Anu Prani Honey'
//using reduceright in array
let reversedCombinedNames = names.reduceRight((acc, name) => acc + ' ' + name, '');
console.log(reversedCombinedNames); // 'Honey Prani Anu Mani Rose Sravani Priya'
// using find in array
let nameWithMoreThanFourLetters = names.find(name => name.length > 4);
console.log(nameWithMoreThanFourLetters); // 'Sravani'
//using findIndex in array
let indexOfLongName = names.findIndex(name => name.length > 4);
console.log(indexOfLongName); // 1 (Sravani)
//using some in array
let hasShortNames = names.some(name => name.length <= 4);
console.log(hasShortNames); // true
//using every in array
let allNamesShort = names.every(name => name.length <= 4);
console.log(allNamesShort); // false
// using sort in array
let sortedNames = names.sort();
console.log(sortedNames); // ['Anu', 'Honey', 'Mani', 'Priya', 'Prani', 'Rose', 'Sravani']
//using reverse in array
let reversedNames = names.reverse();
console.log(reversedNames); // ['Honey', 'Prani', 'Anu', 'Mani', 'Rose', 'Sravani', 'Priya']
// using concat in array
let moreNames = names.concat(['John', 'Doe']);
console.log(moreNames); // ['Honey', 'Prani', 'Anu', 'Mani', 'Rose', 'Sravani', 'Priya', 'John', 'Doe']
//using slice in array
let slicedNames = names.slice(1, 4);
console.log(slicedNames); // ['Prani', 'Anu', 'Mani']
//using splice in array
let removedName = names.splice(2, 1);
console.log(names); // ['Honey', 'Prani', 'Mani', 'Rose', 'Sravani', 'Priya']
console.log(removedName); // ['Anu']
// using includes in array
let hasPriya = names.includes('Priya');
console.log(hasPriya); // true
// using indexOf in array
let indexOfRose = names.indexOf('Rose');
console.log(indexOfRose); // 3
//using lastIndexOf
// Find the last occurrence of 'Rose'
let lastIndexOfRose = names.lastIndexOf('Rose');
console.log(lastIndexOfRose); // Output: 7

//using join in array
let joinedNames = names.join(', ');
console.log(joinedNames); // 'Honey, Prani, Mani, Rose, Sravani, Priya'
//using at in array
console.log(names.at(0));   // 'Anna'
console.log(names.at(-1));  // 'Priya'
//using flat in array
let nestedArray = [1, [2, 3], [4, 5], 6];
let flatArray = nestedArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
// Example: Create a new array with each name repeated twice
let repeatedNames = names.flatMap(name => [name, name]);
console.log(repeatedNames); 
// Output: ['Priya', 'Priya', 'Sravani', 'Sravani', 'Rose', 'Rose', 'Mani', 'Mani', 'Anu', 'Anu', 'Prani', 'Prani', 'Honey', 'Honey']
//using fill in array
let filledArray = names.fill('Unknown', 1, 3);
console.log(filledArray); // ['Anna', 'Unknown', 'Unknown', 'Rose', 'Sravani', 'Priya']

