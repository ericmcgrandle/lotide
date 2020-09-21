const AssertEqualArrays = require('../assertArraysEqual');
const middle = require('../middle');

//Test Code
AssertEqualArrays(middle([1, 2, 3.5, 'a', "dog"]), [3.5]);
AssertEqualArrays(middle([1, 2, 3]), [2]);
AssertEqualArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);