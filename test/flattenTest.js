const flatten = require('../flatten')[0];
const flattenRec = require('../flatten')[1];

//Test code
// console.log(flatten([[1, 2, 3], ['c'], 5]));
// console.log(flatten([[1, 2, 3], ['a', 'b', 'c'], 5, 7, ['a', 'd']]));

//recursively
console.log(flattenRec([[1, 2, 3, [1, 2, ['f', ['4']]]], ['a', 'b', 'c'], 5]));
