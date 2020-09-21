const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {

  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [2, 3, 'a', 'dog'] for [1, 2, 3, 'a', 'dog']", () => {
    assert.deepEqual(tail([1, 2, 3, 'a', 'dog']), [2, 3, 'a', 'dog']);
  });
});