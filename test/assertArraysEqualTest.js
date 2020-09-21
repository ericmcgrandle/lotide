const assertEqualArrays = require('../index').assertArraysEqual;

//Test Code
assertEqualArrays([1, 2, 3], [1, 2, 3]); // => should PASS
// assertEqualArrays([1, 2, 3], [3, 2, 1]); // => should FAIL
// assertEqualArrays([1, 2, 3], ['1', 2, 3]); // => should FAIL
// assertEqualArrays(['1', 2, 3], [1, 2, 3]); // => should FAIL
// assertEqualArrays([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
