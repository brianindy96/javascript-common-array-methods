//The find() method returns the value of the FIRST ELEMENT that passes a test.

const animals = ["Dog", "Fish", "Elephants", "Birds"];


const five = animals.find((x)=>{
    return x.length >= 4;
})

console.log(five);  // Fish


