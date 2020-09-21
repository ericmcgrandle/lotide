# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ericmcgrandle/lotide`

**Require it:**

`const _ = require('@ericmcgrandle/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrOne, arrTwo)`: console.logs the return value from EqArrays
* `assertEqual(actual, expected)`: compare two primitive data types for strict equality
* `assertObjectsEqual(obj1, obj2)`: console.logs the return value from eqObjects
* `countLetters(str)`: returns object with number of each letter in string
* `countOnly(allItems, itemsToCount)`: Takes in two arrays, only counts in the items inside allItems if they also belong in itemsToCount
* `eqArrays(arrOne, arrTwo)`: checks two arrays for equality
* `eqObjects(object1, object2)`: checks two objects for equality
* `findKey(obj, callback)`: returns obj value if it matches callback return value
* `findKeyByValue(obj, value)`: returns key from obj if value matches value
* `flatten(array)`: console.log nested array values
* `head(array)`: returns first element of array
* `letterPosition(sentence)`: returns indexes where letters appear
* `maps(array, callback)`: performs callback function on each item in array
* `middle(array)`: returns middle element in array
* `tail(array)`: returns tail of array
* `takeUntil(array, callback)`: returns a slice of the array until callback returns truthy value
* `without(array, itemsToRemove)`: removes itemsToRemove from array