// NB: expected environment is Node.js

// import the data

var ancestry = JSON.parse(require("./ancestry.js"));

// Provided code:

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// My code:

var numberOfMothers = 0;
var totalDifference = ancestry.reduce(function(acc, current) {
  var output,
      mother = byName[current.mother];
  if (mother) {
    numberOfMothers++;
    output = current.born - mother.born;
  } else {
    output = 0;
  }
  return acc + output;
}, 0);

var answer = totalDifference / numberOfMothers;

// → 31.2
