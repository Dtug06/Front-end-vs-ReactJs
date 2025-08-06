var ola = "banananalooola";
function checkie(ola) {
    var resuit = "";
    for (var _i = 0, ola_1 = ola; _i < ola_1.length; _i++) {
        var items = ola_1[_i];
        if (!resuit.includes(items)) {
            resuit += items;
        }
    }
    return resuit;
}
console.log(checkie(ola));
