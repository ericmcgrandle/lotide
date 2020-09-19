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


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${"✅"}: ${actual} === ${expected}`);
  } else {
    console.log(`${"❌"}: ${actual} !== ${expected}`);
  }
};

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



//Primitive data test code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // eqObjects(ab, ba); // => true
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false


//Array data test code
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { z: 1 }, b: 2, c: [1, 2]}, { a: { z: 1 }, b: 2, c: [1, 2]}), true); // => true
assertEqual(eqObjects({ 1: '1', a: { z: 1 }, b: 2, c: [1, 2]}, { 1: '1', a: { z: 1 }, b: 2, c: [1, 2]}), true); // => true
assertEqual(eqObjects({ 1: '1', a: { z: {y: 3} }, b: 2, c: [1, 2]}, { 1: '1', a: { z: {y: 3} }, b: 2, c: [1, 2]}), true); // => true

assertEqual(eqObjects({ 1: '1', a: { z: {y: 3} }, b: 2, c: [1, 2]}, { 1: '1', a: { z: {y: 4} }, b: 2, c: [1, 2]}), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false





