var listCore = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
var sum = listCore.reduce(function (sum, cur) { return sum + cur; }, 0);
console.log("".concat(sum / 10));
