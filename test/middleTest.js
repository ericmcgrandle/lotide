const { assert } = require('chai');
const AssertEqualArrays = require('../assertArraysEqual');
const middle = require('../middle');


describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3.5] for [1, 2, 3.5, 'a', 'dog']", () => {
    assert.deepEqual(middle([1, 2, 3.5, 'a', 'dog']), [3.5]);
  });

  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

});