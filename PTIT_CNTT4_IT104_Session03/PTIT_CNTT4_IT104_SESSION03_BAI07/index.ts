let ola:string="banananalooola"
function checkie(ola:string):string{
    let resuit="";
    for (const items of ola) {
        if(!resuit.includes(items)){
            resuit+=items;
        }
    }
    return resuit;
}
console.log(checkie(ola));
