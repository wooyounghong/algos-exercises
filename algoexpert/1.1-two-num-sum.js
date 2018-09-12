// input: [3, 5, -4, 8, 11, 1, -1, 6], 10
// output: [-1, 11]

// input: non-empty array of distinct integers AND integer representing target sum;
// output: if exists, return array of any two numbers else return empty array;

const twoNumberSum = (array, targetSum) => {
  // declare empty array and return array;
  const output = [];
  // iterate through the array;
  for (let i = 0; i < array.length; i++) {
    // need to iterate through array to get the 2nd number;
    let firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        // return the sorted pair of nums;
        return [firstNum, secondNum].sort((a, b) => {
          return a - b;
        });
      }
    }
  }
  return output;
};

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
