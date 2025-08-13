function reverseArray(arr) {
    return arr.slice().reverse();
}
var numbers = [1, 2, 3, 4];
console.log(reverseArray(numbers));
var strings = ["a", "b", "c"];
var objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(reverseArray(objects));
