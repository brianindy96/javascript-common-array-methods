let num1 = [1,2,3];
let num2 = [4,5,6];

let concat1 = num1.concat(num2);  
console.log(concat1);   // [1,2,3,4,5,6];

let concat2 = num2.concat(num1);
console.log(concat2);   //[4,5,6,1,2,3]

// String arrays

const arr1 = ["Brian", "Jen"];
const arr2 = ["Phupa", "Joe"];
const arr3 = ["Aom"];

let concat3 = arr1.concat(arr3,arr2);

console.log(concat3);   // ["Brian", "Jen", "Aom", "Phupa", "Joe"];
