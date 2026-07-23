function countVowels(string) {
  const modifyStr = string.toLowerCase();
  let count = 0;
  for (const char of modifyStr) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

const result1 = countVowels("Programming");
const result2 = countVowels("FOYSAL HOSSIEN");
const result3 = countVowels("AnAmarzIa MIm");

console.log(result1);
console.log(result2);
console.log(result3);
