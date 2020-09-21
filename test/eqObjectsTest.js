const assertEqual = require('../index').assertEqual;
const eqObjects = require('../index').eqObjects;

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
// assertEqual(eqObjects({ a: { z: 1 }, b: 2, c: [1, 2]}, { a: { z: 1 }, b: 2, c: [1, 2]}), true); // => true
// assertEqual(eqObjects({ 1: '1', a: { z: 1 }, b: 2, c: [1, 2]}, { 1: '1', a: { z: 1 }, b: 2, c: [1, 2]}), true); // => true
// assertEqual(eqObjects({ 1: '1', a: { z: {y: 3} }, b: 2, c: [1, 2]}, { 1: '1', a: { z: {y: 3} }, b: 2, c: [1, 2]}), true); // => true

// assertEqual(eqObjects({ 1: '1', a: { z: {y: 3} }, b: 2, c: [1, 2]}, { 1: '1', a: { z: {y: 4} }, b: 2, c: [1, 2]}), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
