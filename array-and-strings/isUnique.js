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

// test cases:

console.log(isUnique('hello'));
console.log(isUnique('hel'));
