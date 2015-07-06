// NB: expected environment is Node.js

// import the data

var ancestry = JSON.parse(require("./ancestry.js"));

// My code:

function averageAge(array) {
  function plus(a, b) { return a + (b.died - b.born); }
  return array.reduce(plus, 0) / array.length;
}

function groupBy(array, callback) {
  var answer = Object.create(null);
  array.forEach(function(current) {
    var key = callback(current);
    if (key in answer) {
      answer[key].push(current);
    } else {
      answer[key] = [current];
    };
  });
  return answer;
}

function findCentury(person) {
  return Math.ceil(person.died / 100);
}

// Group people by century

var answer = groupBy(ancestry, findCentury);

// Find average for each century

for (century in answer) {
  answer[century] = averageAge(answer[century]);
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
