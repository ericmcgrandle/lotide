const eqArrays = function(arrOne, arrTwo) {

  //Check length
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  //Check array for equality
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
    return true;
  }
};

const AssertEqualArrays = function(arrOne, arrTwo) {

  if (eqArrays(arrOne, arrTwo)) {
    console.log(`${"✅"}: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`${"❌"}: ${arrOne} !== ${arrTwo}`);
  }
};

//Test Code
AssertEqualArrays([1, 2, 3], [1, 2, 3]); // => should PASS
AssertEqualArrays([1, 2, 3], [3, 2, 1]); // => should FAIL
AssertEqualArrays([1, 2, 3], ['1', 2, 3]); // => should FAIL
AssertEqualArrays(['1', 2, 3], [1, 2, 3]); // => should FAIL
AssertEqualArrays([1, 2, 3, 4], [1, 2, 3]); // => should FAIL


//Could 'imrpove' by providing more detailed return statements
//Each return value would be associated with the reason it failed
//IE: return value 0 = passed
//return value -1 = failed for length being different
//return value -2 = failed for type difference