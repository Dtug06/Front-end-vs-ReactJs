let listCore:number[]=[8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3]
let sum:number=listCore.reduce((sum,cur)=>sum+cur,0)
console.log(`${sum/10}`);
