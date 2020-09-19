const eqArrays = function(arrOne, arrTwo) {

  //Check length
  if (arrOne.length !== arrTwo.length){
    return false;
  }
  //Check array for equality
  for (let i = 0; i < arrOne.length; i++) {
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])){
      if (!eqArrays(arrOne[i], arrTwo[i])){
        return false;
      }
    }
    else if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${"✅"}: ${actual} === ${expected}`);
  } else {
    console.log(`${"❌"}: ${actual} !== ${expected}`);
  }
};

//Test Code
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
// assertEqual(eqArrays([1, 2, 3], ['1', 2, 3]), true); // => should FAIL
// assertEqual(eqArrays(['1', 2, 3], [1, 2, 3]), true); // => should FAIL
// assertEqual(eqArrays([1, 2, 3, 3], [1, 2, 3]), true); // => should FAIL

assertEqual(eqArrays([[2, [3]], []], [[2, [3]], []]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4, 5]), false); // => false

