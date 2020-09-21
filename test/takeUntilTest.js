const takeUntil = require('../index').takeUntil;
const assertEqualArrays = require('../index').assertArraysEqual;


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqualArrays(results1, [ 1, 2, 5, 7, 2 ]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertEqualArrays(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
