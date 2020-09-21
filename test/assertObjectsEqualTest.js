const assertObjectsEqual = require('../index').assertObjectsEqual;

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1}); // => should PASS
// assertObjectsEqual({a: 1, b: 2, c: 3}, {b: 2, a: 1, c: 4}); // => should FAIL
