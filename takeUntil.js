const takeUntil = function(array, callBack) {

  let results = [];
  for (let elem of array){
    if (!callBack(elem)){
      results.push(elem);
    } else {
      break;
    }
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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqualArrays(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertEqualArrays(results2, ['I\'ve', 'been', 'to', 'Hollywood']);