function checkie(para:string|number):void{
    if(typeof para=="string"){
        let count=0;
        for (const element of para) {
            count++;
        }
        console.log(`Co ${count} ky tu`);
        return;
    }else if(typeof para=="number"){
        if(para%2==0){
            console.log(`${para} la so chan`);
            return;
        }else{
            console.log(para +"La so ler");
            return;
        }
    }else{
        console.log("Do so khong hop le ");
    }
    return;
}
type para=any
let paras:para="Tuan"
checkie(paras);
paras = 10;
checkie(paras);
paras=11;
checkie(paras);
paras=true;
checkie(paras);