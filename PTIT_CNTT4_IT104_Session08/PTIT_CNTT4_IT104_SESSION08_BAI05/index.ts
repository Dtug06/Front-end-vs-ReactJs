function findFirstDivisibleByTwo<T>(arr: T[]): T | undefined {
  for (const item of arr) {
    if (typeof item === "number" && item % 2 === 0) {
      return item;
    }
  }
  return undefined;
}
console.log(findFirstDivisibleByTwo([1, 3, 4, "b", 8]));   
console.log(findFirstDivisibleByTwo(["a", "b", "c"]));  
console.log(findFirstDivisibleByTwo([11, 13, 15]));      
