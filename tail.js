const tail = function(array) {

  const tailArr = array.slice(1);
  return tailArr;

};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${"✅"}: ${actual} === ${expected}`);
  } else {
    console.log(`${"❌"}: ${actual} !== ${expected}`);
  }
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
let newArr = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

for (let i = 0; i < newArr.length; i++) {
  assertEqual(words[i + 1], newArr[i]);
}
