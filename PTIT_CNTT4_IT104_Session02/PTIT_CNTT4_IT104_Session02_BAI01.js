function sum(arr){
    let sumArr=0;
    for (const num of arr) {
        if(num%2==0){
            sumArr+=num;
        }
    }
    return sumArr;
}
let arr=[1,2,3,4,5,6,7,8,9];
console.log(`${sum(arr)}`);
