const eqObjects = require('./eqObjects');

//console.log pass or fail
const assertObjectsEqual = function(obj1, obj2) {

  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    console.log(`${"✅"}: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`${"❌"}: ${inspect(obj1)} === ${inspect(obj2)}`);
  }
};


module.exports = assertObjectsEqual;




