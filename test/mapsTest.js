const map = require('../maps');
const assertEqualArrays = require('../index').assertArraysEqual;

const words = ["ground", "control", "to", "major", "tom"];
const testCase1 = map(words, word => word[0]);
assertEqualArrays(testCase1, ['g', 'c', 't', 'm', 't']);

// const numbers = [2, 2.5, 6, 10];
// const testCase2 = map(numbers, num => num*2);
// assertEqualArrays(testCase2, [4, 5, 12, 20]);

// const addToWords = ["ground", "control", "to", "major", "tom"];
// const testCase3 = map(words, word => word + "ay");
// assertEqualArrays(testCase3, ["grounday", "controlay", "toay", "majoray", "tomay"]);
