// # Prompt
////// REIMPLEMENT INDEXOF
// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

// ---

// # Examples

// 2 inputs: two string inputs
// output: return index of second string if first exist on it;  if not found, returns -1;
// cannot use indexOf or find or includes

// given two strings called 'str1' and 'str2'
const indexOf = (str1, str2) => {
  // iterate starting at index = 0, iterating up to length of str2 - length of str1, increment by 1;
  for (let i = 0; i <= str2.length - str1.length; i++) {
    // console.log(i); // iterates 9 times;
    for (let j = 0; j < str1.length; j++) {
      //// on first iteration,
      // when i = 0, j = 0;
      // if str2[i + j] = str1[j] => 'h' !== 'o' -> break loop;
      if (str2[i + j] !== str1[j]) break;
      // when i = 7, j = 0,
      // if  str2[i + j] === str1[j] && if 1 + 1 === 2
      // if char1 is same as char2 AND if the index of j + 1 is same length as str1.length => return index of str2;
      if (j + 1 === str1.length) return i;
    }
  }
  // if not found, return -1;
  return -1;
};

// ``` javascript
console.log(indexOf('or', 'hello world')); // should return 7
// indexOf('hello world', 'or'); // should return -1
// indexOf('howdy', 'hello world'); // should return -1
// indexOf('oox', 'ooboxoooxo'); // should return 6
// ```
