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



const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${"✅"}: ${actual} === ${expected}`);
  } else {
    console.log(`${"❌"}: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const dogNames = {
  dog1: "hugo",
  dog2: "charles"
}


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "sci_fi"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
assertEqual(findKeyByValue(dogNames, "hugo"), 'dog1');
