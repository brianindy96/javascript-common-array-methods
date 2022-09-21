
// ** includes() method is case sensitive

// [0, 1, 2, 3]
const animals = ["Dog", "Fish", "Elephants", "Birds"];

// does the array include the element "Cats"

console.log(animals.includes("Cats"));  //false;

console.log(animals.includes("Dog"));   //true;

// Does the array include "Fish" starting the search from position 3
console.log(animals.includes("Fish", 3));   //false;

// Does the array include "Fish" starting the search from position 0

console.log(animals.includes("Fish", 0));   //true;

console.log(animals.includes("Fish", 1));   //true;