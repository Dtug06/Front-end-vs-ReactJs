var firstName = "john";
var lastName = "doe";
var name;
function isUp(charecter) {
    return charecter == charecter.toUpperCase();
}
if (isUp(firstName.charAt(0))) {
    name = firstName.concat("", lastName);
}
else {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    name = firstName.concat(" ", lastName);
}
console.log(name);
