const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

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

const assertEqualArrays = function(arrOne, arrTwo) {

  if (eqArrays(arrOne, arrTwo)) {
    console.log(`${"✅"}: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`${"❌"}: ${arrOne} !== ${arrTwo}`);
  }
};



const words = ["ground", "control", "to", "major", "tom"];
const testCase1 = map(words, word => word[0]);
assertEqualArrays(testCase1, ['g', 'c', 't', 'm', 't']);

const numbers = [2, 2.5, 6, 10];
const testCase2 = map(numbers, num => num*2);
assertEqualArrays(testCase2, [4, 5, 12, 20]);

const addToWords = ["ground", "control", "to", "major", "tom"];
const testCase3 = map(words, word => word + "ay");
assertEqualArrays(testCase3, ["grounday", "controlay", "toay", "majoray", "tomay"]);