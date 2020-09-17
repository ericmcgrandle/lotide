const findKey = (obj, callBack) => {

  for (let elem in obj) {
    if (callBack(obj[elem])) {
      return elem;
    }
  }
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${"✅"}: ${actual} === ${expected}`);
  } else {
    console.log(`${"❌"}: ${actual} !== ${expected}`);
  }
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"


assertEqual(findKey({
  "dog": { name: "charlie" },
  "cat":   { size: 'small' },
  "snake":      { age: 8 },
  "fish":   { type: 'gold fish' },
}, x => x.type === 'gold fish'), 'fish'); // => "fish"