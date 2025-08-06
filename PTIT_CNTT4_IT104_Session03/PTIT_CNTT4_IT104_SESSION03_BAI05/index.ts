let firstName:string="john"
let lastName:string="doe"
let name:string
function isUp(charecter:string):boolean{
   return charecter==charecter.toUpperCase();
}
if(isUp(firstName.charAt(0))){
      name=firstName.concat("",lastName);
}else{
    firstName = firstName.charAt(0).toUpperCase()+firstName.slice(1);
    name=firstName.concat(" ",lastName);
}
console.log(name);


