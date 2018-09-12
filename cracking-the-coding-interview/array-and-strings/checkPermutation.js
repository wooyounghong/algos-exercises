// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

// What is permutation ?  Example: dog/god
// Is the permutation case-sensitive?

// input: two strings;
// output: true if permutation, false if not;

// what is the bigO notation

const checkPermutation = (str1, str2) => {
  // in another function, need to get str2 to convert into permutation
  // case - sensitive
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  const convert = str => {
    let output = '';
    for (let i = str.length - 1; i >= 0; i--) {
      output += str[i];
    }
    return output;
  };
  if (convert(lowerStr1) !== lowerStr2) {
    return false;
  }
  return true;
};

const checkPermutation = (str1, str2) => {
  // if the lengths of str1 and str2 are not equal,
  // return false;
  if (str1.length !== str2.length) {
    return false;
  }
  // if the lengths are same,
  // sort the strings
  const sortedStr1 = str1
    .split('')
    .sort()
    .join('');
  const sortedStr2 = str2
    .split('')
    .sort()
    .join('');
  return sortedStr1 === sortedStr2;
};

console.log(checkPermutation('GOD', 'DoG'));
