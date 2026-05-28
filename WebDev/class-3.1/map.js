const arr = [5, 1, 3, 2, 6];

// map  is used to transform, 
// transform means changing the value of each elements of the given array


// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]
// Binary - ["101", "1", "11", "10", "110"]

function double(i){
    return i * 2;
}


const ans = arr.map(double)
console.log(ans);

function triple(i){
    return i * 3;
}
const output = arr.map(triple);
console.log(output);

// .toString() normally converts a number to a string, but if you pass 2 as the base, it converts the number into binary.
// number.toString(base) // it can be 2 for binary, 8 for Octal, 10 for Decimal

function binary(i){
    return i.toString(2);
}
const answer = arr.map(binary);
console.log(answer);


// we can write it like this

const outputs = arr.map(function binary(x) {
    return x.toString(2);
});

console.log(outputs);

// arrow fun way
const outpts = arr.map((x) => {
    return x.toString(2);
});

console.log(outpts);

// Without curly arrow fun.
const outpt = arr.map((x) => x.toString(2));

console.log(outpt);