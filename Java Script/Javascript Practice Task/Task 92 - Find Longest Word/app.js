const sentenceArr = ["I", "love", "JavaScript", "very", "much"];
const sentenceArr2 = ["I", "love", "to", "coding", "all", "day"];
const sentenceArr3 = ["My", "name", "is", "Alexender", "Antony"];

function findLongestWord(array) {
  let longestWord = "";
  for (const word of array) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const result = findLongestWord(sentenceArr);
const result2 = findLongestWord(sentenceArr2);
const result3 = findLongestWord(sentenceArr3);

console.log(result);
console.log(result2);
console.log(result3);
