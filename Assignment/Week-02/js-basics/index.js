// 1.
const expense = {food: [10, 20, 30], travel: [5, 15], bills: [40, 60]};
const ans = {};

for(let [keys, vlaues] of Object.entries(expense)){
    ans[keys] = vlaues.reduce((acc, curr) => acc + curr, 0);
}
console.log(ans);
// output : { food: 60, travel: 20, bills: 100 }


// 2.

const arrWord = ["apple", "banana", "apple", "orange", "banana", "apple"]

const ans = {};
