function createUser(name, age = 18, role = "user") {
  return {
    name,
    age,
    role
  };
}
console.log(createUser("Tuan"));           
console.log(createUser("Linh", 25));       
console.log(createUser("Nam", 30, "admin"));
