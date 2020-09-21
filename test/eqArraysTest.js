const assertEqual = require('../index').assertEqual;
const eqArrays = require('../index').eqArrays;


//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
// assertEqual(eqArrays([1, 2, 3], ['1', 2, 3]), false); // => should FAIL
// assertEqual(eqArrays(['1', 2, 3], [1, 2, 3]), false); // => should FAIL
// assertEqual(eqArrays([1, 2, 3, 3], [1, 2, 3]), false); // => should FAIL
// assertEqual(eqArrays([[2, [3]], []], [[2, [3]], []]), true); // => true
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4, 5]), false); // => false
