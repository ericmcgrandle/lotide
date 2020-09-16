const countLetters = function(str){

  str = str.replace(/\s/g, '');
  let numLetters = {};

  for (let char of str){
    if (numLetters[char]){
      numLetters[char]++;
    } else {
      numLetters[char] = 1;
    }
  }

  return numLetters;

};


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${"✅"}: ${actual} === ${expected}`);
  } else {
    console.log(`${"❌"}: ${actual} !== ${expected}`);
  }
};


console.log(countLetters("lighthouse in the house"));
console.log(countLetters("aabbccdd123"));
console.log(countLetters(""));
console.log(countLetters("-1,.^%he"));
