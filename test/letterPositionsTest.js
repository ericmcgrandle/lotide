const { assert } = require('chai');
const letterPositions = require('../index').letterPositions;


describe('#letterPostions', () => {
  it('return [0] for "hello.h', () => {
    assert.deepEqual((letterPositions("hello").h), [0])
  });
});


// assertEqualArrays(letterPositions("hello").h, [0]);
// assertEqualArrays(letterPositions("hello").e, [1]);
// assertEqualArrays(letterPositions("hello").l, [2, 3]);
// assertEqualArrays(letterPositions("hello").o, [4]);