//Return the square root of each numbers in Arrays
const numbers = [4, 9, 16, 25];
const roots = numbers.map((x)=>{
    return Math.sqrt(x);
})

console.log(roots); // [2,3,4,5];

// Return an array with 
const name = ["Brian", "Chanida", "Geoffrey"];
const full_name = name.map((person)=>{
    return person + " Garton";
});


// map() does not change the original Array

console.log(name);  //["Brian", "Chanida", "Geoffrey"]
console.log(full_name); //["Brian Garton", "Chanida Garton", "Geoffrey"];

