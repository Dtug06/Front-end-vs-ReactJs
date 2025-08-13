function findFirstDivisibleByTwo(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (typeof item === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
}
console.log(findFirstDivisibleByTwo([1, "a", 4, "b", 8]));
console.log(findFirstDivisibleByTwo(["a", "b", "c"]));
console.log(findFirstDivisibleByTwo([11, 13, 15]));
