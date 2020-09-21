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

console.log(flattenedRec);


module.exports = [flatten, flattenRec];





