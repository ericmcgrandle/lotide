const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
let newArr = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

for (let i = 0; i < newArr.length; i++) {
  assertEqual(words[i + 1], newArr[i]);
}