//Non-recursive
const flatten = function(array){

  let flattened = [];
  for (let i = 0; i < array.length; i++){

    if (Array.isArray(array[i])){
      for (let element of array[i]){
        flattened.push(element);
      }
    } else {
      flattened.push(array[i]);
    }
  }

  return flattened;
  
};


//Recursive
let flattenedRec = [];
const flattenRec = function(array){

  for (let i = 0; i < array.length; i++){

    if (Array.isArray(array[i])){
      flattenRec(array[i]);
    } else {
      flattenedRec.push(array[i]);
    }
  }
};


//Test code

console.log(flatten([[1, 2, 3], ['c'], 5]));
console.log(flatten([[1, 2, 3], ['a', 'b', 'c'], 5, 7, ['a', 'd']]));

//recursively
flattenRec([[1, 2, 3, [1, 2, ['f', ['4']]]], ['a', 'b', 'c'], 5]);
console.log(flattenedRec);



