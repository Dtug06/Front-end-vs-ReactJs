function findElement(arr, value) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (item === value) {
            return item;
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], 3));
console.log(findElement(["a", "b", "c"], "b"));
console.log(findElement(["a", "b", "c"], "x"));
