function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    const key = word.split('').sort().join('');
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }
  return Object.values(map);
}
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
