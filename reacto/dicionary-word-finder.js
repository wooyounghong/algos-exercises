// # Dictionary Word Finder

// <style>
//   .remark-code {
//     white-space: pre-wrap;
//   }
// </style>

// ---

// # Interviewer Prompt

// Given an alphabetical array of dictionary entries and a word to search for, find that word's definition (if it exists). A dictionary entry is just a string where the word's name appears first, followed by ` - [definition]`.

// ```javascript
const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)',
];
// ```

// input: string word, array words and definitions;
// output: if found, should return the definition of the word; if not found, should return undefined

const definitionOf = (word, dictionary) => {
  // need to iterate over the dictionary array;
  for (let i = 0; i < dictionary.length; i++) {
    // if the word exists in the dictionary,
    // use String.startsWith() method
    // slice the string so only definition comes out;
    if (dictionary[i].startsWith(word + ' - ')) {
      // console.log('word exists', dictionary[i].slice(word.length + 2));
      return dictionary[i].slice(word.length + 3);
    }
  }
  // if not found, return undefined
  return undefined;
};

console.log(definitionOf('be', dictionary)); // should return 'Exist'
definitionOf('that', dictionary); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
definitionOf('to', dictionary); // should return 'Expressing motion in the direction of (a particular location)'
definitionOf('wizbing', dictionary); // should return undefined
