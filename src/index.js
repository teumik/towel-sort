// You should implement your task here.
module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }

  let arr = [];

  matrix.forEach((el, i) => {
    if (i % 2 !== 0) {
      arr = arr.concat(matrix[i].sort((a, b) => b - a));
    }
    else {
      arr = arr.concat(matrix[i]);
    }
  });

  return arr;
}
