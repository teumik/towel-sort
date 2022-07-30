
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

  // return matrix.reduce((acc, el, i) => {
  //   el.sort((a, b) => (i % 2 !== 0) ? b - a : a - b).map(item => acc.push(item));
  //   return acc;
  // }, [])

}