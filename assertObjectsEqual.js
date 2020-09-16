//console.log pass or fail
const assertObjectsEqual = function(obj1, obj2) {

  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    console.log(`${"✅"}: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`${"❌"}: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
};

//Checks if objects are equal
const eqObjects = function(object1, object2) {

  //Check if num of keys are same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let element of Object.keys(object1)) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }

  return true;

};

//If object contains arrays as values
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



assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1}); // => should PASS
assertObjectsEqual({a: 1, b: 2, c: 3}, {b: 2, a: 1, c: 4}); // => should FAIL





