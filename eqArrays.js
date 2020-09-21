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


module.exports = eqArrays;