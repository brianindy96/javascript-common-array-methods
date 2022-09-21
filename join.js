// returns an array as a string with .join()

const numbers = [1,2,3,4,5];

let string = numbers.join();

let box = numbers.join(" ");

console.log(string);    // 1,2,3,4,5

console.log(box);   // 1 2 3 4 5

const names = ["Brian", "John", "Rex"];

let join = names.join();

let comma = names.join(' ');

console.log(join);  // Brian,John,Rex

console.log(comma); // Brian John Rex

let and = names.join('and');

console.log(and); // BrianandJohnandRex;

let space = names.join(' and ');

console.log(space); // Brian and John and Rex



