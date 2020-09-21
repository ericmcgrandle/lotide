const without = function(array, itemsToRemove){

  const result = [...array];

  for (let i = 0; i < result.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      if (result[i] === itemsToRemove[j]){
        result.splice(i, 1);
        i--;
      }
    }
  }
  
  return result;
}


module.exports = without;


//Things to note:
//[...array] is a shallow copy, will not work for multi-dimensional arrays





