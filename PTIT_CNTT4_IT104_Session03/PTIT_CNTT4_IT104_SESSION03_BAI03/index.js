var isGreeting = true;
function print() {
    if (isGreeting) {
        console.log("Xin chao");
    }
    else {
        console.log("Tam biet");
    }
    ;
}
print();
isGreeting = false;
print();
