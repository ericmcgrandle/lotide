const middle = function(array) {

  const length = array.length;
  const midIndex = Math.floor(length / 2);
  const middle = [];
  
  //Length is less than 3
  if (length < 3) {
    return middle;
  }
  //odd number of array elements
  if (length % 2 !== 0) {
    middle.push(array[midIndex]);
  } else {
    middle.push(array[midIndex - 1]);
    middle.push(array[midIndex]);
  }

  return middle;

};


module.exports = middle;