abstract class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract makeNoise():void;
    printName(){
        console.log(this.name);   
    }
}
class Cat extends Animal{
    constructor(name:string){
        super(name);
        this.name=name;
    }
    makeNoise(): void {
        console.log("MeoMeo!!!");
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name);
        this.name=name;
    }
    makeNoise(): void {
        console.log("WoofWoof!!!");
    }
}
let cat1=new Cat("Meo Anh");
let dog1=new Dog("beg de");
cat1.makeNoise();
cat1.printName();
dog1.makeNoise();
dog1.printName();