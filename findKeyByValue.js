const findKeyByValue = function(obj, value){

  // convert to array
  let arr = Object.entries(obj);
  for (let i = 0; i < arr.length; i++){
    if (arr[i][1] === value){
      return arr[i][0];
    }
  }
  return undefined;

}

module.exports = findKeyByValue;