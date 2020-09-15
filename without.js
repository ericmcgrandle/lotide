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

//Function to see if any elements are the same, return index


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, 2, 3, "2"]));
console.log(without(["1", 2, "3"], [1, 2, "1"]));
let x = ["dog", "cat", 1, "5", null];
console.log(without(x, ["cat", null, 5, "1"]));
console.log("x", x);


//Things to note:
//[...array] is a shallow copy, will not work for multi-dimensional arrays





