// reduce() : reduce to single value
const arr = [10, 2, 4, 8];

const total = arr.reduce((acc, curr) => {
    return acc + curr;
},0); // 0 is intial value passed to accumulator 
// accumulator works: acc = acc + curr
console.log(total);


// without reduce or traditionally

function findSum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}
console.log(findSum(arr));





// set() : unique value only

const array = [10, 30, 15, 30, 10, 20, 25];
const setS1 = new Set(array);
console.log(setS1);
