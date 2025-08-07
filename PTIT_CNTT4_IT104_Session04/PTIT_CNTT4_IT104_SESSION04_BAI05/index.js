var current = {
    name: "Tuan",
    age: 20,
    employeeId: "B24DTCX389",
    department: "Rikkei",
};
function printStaffInfo(staff) {
    console.log("Ten toi la ".concat(staff.name, ", ").concat(staff.age, " tuoi ,ma sinh vien ").concat(staff.employeeId, ", o phong ").concat(staff.department));
}
printStaffInfo(current);
