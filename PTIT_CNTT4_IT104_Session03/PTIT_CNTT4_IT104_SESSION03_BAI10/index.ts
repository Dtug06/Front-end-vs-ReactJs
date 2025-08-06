function isUnique(word: string): boolean {
  const charSet = new Set();
  for (const char of word) {
    if (charSet.has(char)) return false;
    charSet.add(char);
  }
  return true;
}
function findLongestUniqueWord(sentence: string): string {
  const words = sentence.split(" ");
  let longest = "";

  for (const word of words) {
    if (isUnique(word) && word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
const input = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestUniqueWord(input)); 
