// check if palindrome;
// no space necessary;
// input: string;
// output: bool;

function isPalindrome(string) {
  // iterate through string;
  for (let i = 0; i < string.length; i++) {
    // compare the front char to last char
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// solution:
function isPalindrome(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}

console.log(isPalindrome('aba'));
