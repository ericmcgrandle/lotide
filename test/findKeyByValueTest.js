const { assert } = require('chai');
const findKeyByValue = require('../index').findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const dogNames = {
  dog1: "hugo",
  dog2: "charles"
}

describe('#findKeyByValue', () => {
  it('return drama for bestTvShowsByGenre, The Wire', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('return drama for bestTvShowsByGenre, The Wire', () => {
    assert.strictEqual(findKeyByValue(dogNames, "hugo"), "dog1");
  });

  it('return undefined for bestTvShowsByGenre, That 70s show', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s show"), undefined);
  });
});