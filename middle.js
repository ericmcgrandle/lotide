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


const middle = function(array) {

  const length = array.length;
  const midIndex = Math.floor(length / 2);
  const middle = [];
  
  //Length is less than 3
  if (length < 3) {
    return middle;
  }
  //odd number of array elements
  if (length % 2 !== 0) {
    middle.push(array[midIndex]);
  } else {
    middle.push(array[midIndex - 1]);
    middle.push(array[midIndex]);
  }

  return middle;

};



//Test Code
AssertEqualArrays(middle([1, 2, 3.5, 'a', "dog"]), [3.5]);
AssertEqualArrays(middle([1, 2, 3]), [2]);
AssertEqualArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);