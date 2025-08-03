const data = [
  { id: "S001", name: "Tuan" },
  { id: "S002", name: "Linh" },
  { id: "S003", name: "Nam" }
];

const student={
    id:"",
    name:"",
} 
data.forEach(items => {
    console.log(`${items.id},${items.name}`);
});