let fruits = ["Apple", "Banana", "Orange", "Melon"];

                            // start, end-1
let fruitNinjas = fruits.slice(1,2);

let john = fruits.slice(2,4);   

console.log(fruitNinjas);   // ["Banana"];

console.log(john);  // ["Orange", "Melon"];

let reverse = fruits.slice(-4, -2); 

console.log(reverse);   // ["Apple", "Banana"];