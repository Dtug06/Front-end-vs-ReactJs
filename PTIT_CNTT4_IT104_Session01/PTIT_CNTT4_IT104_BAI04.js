const isNumber=value=>typeof value=='number'&&!isNaN(value);
let input=prompt("Nhap gia tri check");
let number=Number(input);
if(isNumber(number)){
    if(number%2==0){
        console.log(`la so chan`);
    }else{
        console.log(`la so le`);
    }
}else{
    console.log(`khong phai so `);
}

