var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var user = { name: "Alice", age: 25 };
var job = { title: "Developer", salary: 2000 };
var merged = mergeObjects(user, job);
console.log(merged);
