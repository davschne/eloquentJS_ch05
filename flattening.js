var arrays = [[1, 2, 3], [4, 5], [6]]; // test data

function flatten(array_of_arrays) {
  return array_of_arrays.reduce(function(acc, current) {
    return acc.concat(current);
  }, []);
}

var answer = flatten(arrays);
