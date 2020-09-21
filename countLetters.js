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


module.exports = countLetters;