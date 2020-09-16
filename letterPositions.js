const letterPositions = function(sentence) {

  const results = {};
  
  for (let char of sentence) {
    if (results[char]) {
      results[char].push(sentence.indexOf(char));
      sentence = sentence.replace(char, ' ');
    } else {
      results[char] = [];
      results[char].push(sentence.indexOf(char));
      sentence = sentence.replace(char, ' ');
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


assertEqualArrays(letterPositions("hello").h, [0]);
assertEqualArrays(letterPositions("hello").e, [1]);
assertEqualArrays(letterPositions("hello").l, [2, 3]);
assertEqualArrays(letterPositions("hello").o, [4]);
