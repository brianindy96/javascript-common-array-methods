// splice method takes 3 arguments (start where, delete how many, add what to it) 
// position: [1,2,3,4]
let names = ["Brian", "Jen", "Tuesday", "John"];

// at position 2, remove 0 items
console.log(names.splice(2,0));    //["Brian", "Jen", "Tuesday", "John"];

// at position 1, remove 2 items
console.log(names.splice(1,2))  // ["Brian", "John"]

// at position 1, remove 2 items, add 2 elements

console.log(names.splice(1,2, "Jack", "Jill")); // ["Brian", "Jack", "Jill", "John"];