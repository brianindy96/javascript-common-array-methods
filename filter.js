// Filter age that is not 18 or over

const age = [17, 18, 15, 23, 12, 7, 29];
const over_18 = age.filter((num)=>{
    return num >= 18;
});

console.log(over_18);