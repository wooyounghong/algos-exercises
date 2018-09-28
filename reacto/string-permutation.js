// # Prompt

// Given a string, return an array of all the permutations of that string.
// The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once)
// but do not need to be actual words.

// The array that is returned should only contain unique values and its elements should be in alphabetical order.

// # Examples

// ```javascript
// ```

// input: string;
// output: array of permutations;
// permutation pattern:
// 1. swap firstLetter with thirdLetter 1 -> 3
// 2. swap secondLetter with secondLetter 2 -> 2
// 3. swap thirdLetter with firstLetter 3 -> 1
// 4. push the result ['eno']
// 5. swap firstLetter with thirdLetter  1 -> 3
// 6. swap secondLetter with firstLetter  2 -> 1
// 7. swap thirdLetter with secondLetter  3 -> 2
// 8. push the result; ['eno', 'eon']
// 9. swap firstLetter with secondLetter  1 -> 2
// 10. swap secondLetter with firstLetter  2 -> 1
// 11. swap thirdLetter with thirdLetter  3 -> 3
const stringPermutations = str => {
  const permutations = [];
  let output = '';
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  permutations.push(output);
  console.log(permutations);
};

stringPermutations('one');
// should return  [ 'eno', 'eon', 'neo', 'noe', 'oen', 'one']
// stringPermutations('app');
// should return  [ 'app','pap','ppa']
// stringPermutations('nn'); //should return  [ 'nn' ]
