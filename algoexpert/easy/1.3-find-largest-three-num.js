// write function that takes in array of integers and return sorted array with three largest integers;

// input: array of integers [10, 5, 9, 10, 12]
// output: [10, 10, 12]

const findThreeLargestNumbers = array => {
  const output = [null, null, null];
  for (let i = 0; i < array.length; i++) {
    // if (output[0] < output[1] && output[0] < array[i]) {
    //   output[0] = array[i];
    // }
    if (output[1] < array[i] && output[1] < output[2]) {
      output[1] = array[i];
    }
    if (output[2] < array[i]) {
      output[2] = array[i];
    }
    output.sort((a, b) => {
      return a - b;
    });
  }
  return output;
};

console.log(findThreeLargestNumbers([10, 5, 9, 10, 12]));
