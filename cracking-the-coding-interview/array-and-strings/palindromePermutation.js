// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.

// example:
// Input: Tact Coa
// Output: True (permutations: "taco cat'; "atc o eta·; etc.)

const palindromePermutation = string => {
  // remove space
  const joinedStr = string.split(' ').join('');
  // if even
  if (joinedStr.length % 2 === 0) {
    
  }
};

// specs:

console.log(palindromePermutation('taco cat'));
console.log(palindromePermutation('atc o eta'));
