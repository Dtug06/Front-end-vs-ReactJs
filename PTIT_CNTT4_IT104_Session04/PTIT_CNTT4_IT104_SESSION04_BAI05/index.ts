type person ={
    name:string,
    age:number
}
type employee={
  employeeId:string,
  department:string,
}
type StaffMember=employee&person;
let current:StaffMember={
   name:"Tuan",
   age:20,
   employeeId:"B24DTCX389",
   department:"Rikkei",
};
function printStaffInfo(staff: StaffMember):void{
 console.log(`Ten toi la ${staff.name}, ${staff.age} tuoi ,ma sinh vien ${staff.employeeId}, o phong ${staff.department}`);
}
printStaffInfo(current);
 