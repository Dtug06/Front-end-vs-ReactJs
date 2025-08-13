function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse(); 
}

const numbers = [1, 2, 3, 4];
console.log(reverseArray(numbers));
const strings = ["a", "b", "c"];
const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(reverseArray(objects)); 
