
module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  } else {
    let sorted = [];

    matrix.forEach((arr, i) => {
      if (i == 0 || i % 2 == 0) {
        sorted = sorted.concat(arr);
      } else if (i % 2 != 0) {
        arr.reverse();
        sorted = sorted.concat(arr);
      }
    });

    return sorted;
  }
}
