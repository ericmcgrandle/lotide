const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  //Check if num of keys are same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let element of Object.keys(object1)) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      if (!eqArrays(object1[element], object2[element])){
        return false;
      }
    } else if (typeof object1[element] === 'object' && object1[element] !== null && typeof object2[element] === 'object' && object2[element] !== null) {
      if (!eqObjects(object1[element], object2[element])){
        return false;
      }

    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }

  return true;

};

module.exports = eqObjects;




