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

module.exports = letterPositions;


