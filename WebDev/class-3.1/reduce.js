// reduce() : reduce to single value
const arr = [10, 2, 4, 8];

const total = arr.reduce((acc, curr) => {
    return acc + curr;
},0);
console.log(total);




// set() : unique value only

const array = [10, 30, 15, 30, 10, 20, 25];
const setS1 = new Set(array);
console.log(setS1);
