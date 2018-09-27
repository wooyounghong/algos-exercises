/*
Even Occurrence
Find the first item that occurs an even number of times in an array. 
Remember to handle multiple even-occurrence items and return the first one. 
Return null if there are no even-occurrence items.
example:
  1. input: var arr = [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
     output: 2
  2. input: var arr = [ "cat", "dog", "dig", "cat" ]
     output: "cat"
*/

const evenOccurrence = arr => {
  const hash = {};
  arr.forEach(item => {
    hash.hasOwnProperty(item) ? hash[item]++ : (hash[item] = 1);
  });
  // console.log(hash);
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
};

// console.log(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5])); // expected output : 2;
console.log(evenOccurrence(['cat', 'dog', 'dig', 'cat'])); // expected output: 'cat';
