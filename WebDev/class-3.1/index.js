//map, filter and arrow functions


// Traditional way function
// function sum(a, b){
//     return  a + b;
// }
// //Write this normal function as arrow function
// const sum = (a, b) => {
//     return a + b;
// }

// //  Another way to write arrow function
// app.get("/", (req, res) =>{

// })

// app.get("/", function(req, res) {

// })
// const answ = sum(1, 2);
// console.log(answ)


//    Map()

// Given an array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3 , 4, 5];

// //solution
// const newArray = [];

// for(let i = 0; i<input.length; i++){
//     newArray.push(input[i] * 2);
// }
// console.log(newArray);


//   map way sol.
// Map  is used to transform an array

// function transform(i){
//     return i * 2;
// }
// const ans = input.map(transform);
// console.log(ans);

// Better way(anonymous callback function)
// const ans = input.map(function(i){
//     return i * 2;
// });
// console.log(ans);

//     filter()
function filterLogic(n){
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
}
const answer = arr.filter(filterLogic);
console.log(answer);

//Anonymous callback function way
const ans2 = arr.filter(function(n){
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
});
console.log(ans2);

//If we had to filter the name which start with r
const arr = ["raja", "ramna", "vaayu"];

//logic is
if(n.startsWith("r")){

}