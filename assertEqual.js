const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`${"✅"}: ${actual} === ${expected}`);
  } else {
    console.log(`${"❌"}: ${actual} !== ${expected}`);
  }
};

//Test Code
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(3, 3);
assertEqual(4, 3);

