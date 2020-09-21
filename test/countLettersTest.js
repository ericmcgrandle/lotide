const { assert } = require('chai');
const countLetters = require('../index').countLetters;

describe('#countLetts', () => {

  it('return { a:1, b:1, c:1 }', () => {
    assert.deepEqual(countLetters('abc'), { a:1, b:1, c:1 });
  });

  it('return { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }', () => {
    assert.deepEqual(countLetters("Lighthouse in the house"), { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});
