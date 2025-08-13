function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
const user = { name: "Alice", age: 25 };
const job = { title: "Developer", salary: 2000 };

const merged = mergeObjects(user, job);
console.log(merged);
