var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.year = year;
        this.name = name;
        this.company = company;
    }
    return Vehicle;
}());
var ve1 = new Vehicle("tuan", 2006, "rikkei");
var ve2 = new Vehicle("her", 2006, "none");
console.log(ve1);
console.log(ve2);
