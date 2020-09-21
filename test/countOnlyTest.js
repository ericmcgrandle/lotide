const { assert } = require('chai');
const countOnly = require('../index').countOnly;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('return 1 for "Jason" in firstNames', () => {
    assert.strictEqual((result1["Jason"]), 1)
  });

  it('return undefined for "Karima" in firstNames', () => {
    assert.strictEqual((result1["Karima"]), undefined)
  });

  it('return 2 for "Fang" in firstNames', () => {
    assert.strictEqual((result1["Fang"]), 2)
  });


});