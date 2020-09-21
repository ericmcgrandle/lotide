const without = require('../index').without;

//Function to see if any elements are the same, return index
console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
// console.log(without(["1", "2", "3"], [1, 2, 3, "2"]));
// console.log(without(["1", 2, "3"], [1, 2, "1"]));
