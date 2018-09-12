// Is Unique: Implement an algorithm to determine if a string has all unique characters.

// Given a string, return true if every character in the string is unique
// else return false;

const isUnique = string => {
  const store = {};
  for (let i = 0; i < string.length; i++) {
    if (store.hasOwnProperty(string[i])) {
      return false;
    }
    store[string[i]] = 1;
  }
  return true;
};

// no data structures

const isUnique = string => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      // if match,
      // return false;
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};

// test cases:

console.log(isUnique('hello'));
console.log(isUnique('hel'));
