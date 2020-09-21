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

module.exports = takeUntil;