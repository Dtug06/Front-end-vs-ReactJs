class Vehicle{
  name:string;
  year:number;
  company:string
  constructor(name:string,year:number,company:string){
       this.year=year;
       this.name=name;
       this.company=company;
  }
}
let ve1=new Vehicle("tuan",2006,"rikkei");
let ve2=new Vehicle("her",2006,"none");
console.log(ve1);
console.log(ve2);