const { assert } = require('chai');
const findKey = require('../index').findKey;



const noma = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const fish = {
  "dog": { name: "charlie" },
  "cat":   { size: 'small' },
  "snake":      { age: 8 },
  "fish":   { type: 'gold fish' },
};


describe('#findKey', () => {
  it('return noma for noma', () => {
    assert.deepEqual(findKey(noma, (x => x.stars === 2)), 'noma');
  });

  it('return fish for fish', () => {
    assert.deepEqual(findKey(fish, (x => x.type === 'gold fish')), 'fish');
  });
});