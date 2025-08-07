function checkie(para) {
    if (typeof para == "string") {
        var count = 0;
        for (var _i = 0, para_1 = para; _i < para_1.length; _i++) {
            var element = para_1[_i];
            count++;
        }
        console.log("Co ".concat(count, " ky tu"));
        return;
    }
    else if (typeof para == "number") {
        if (para % 2 == 0) {
            console.log("".concat(para, " la so chan"));
            return;
        }
        else {
            console.log(para + "La so ler");
            return;
        }
    }
    else {
        console.log("Doi so khong hop le ");
    }
    return;
}
var paras = "Tuan";
checkie(paras);
paras = 10;
checkie(paras);
paras = 11;
checkie(paras);
paras = true;
checkie(paras);
