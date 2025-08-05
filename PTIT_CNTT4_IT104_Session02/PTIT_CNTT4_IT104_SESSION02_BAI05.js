const phoneBook = [];
function addContact(name, phone, email) {
  const user = { name, phone, email };
  phoneBook.push(user);
}
function displayContact(phoneBook) {
  if (phoneBook.length === 0) {
    console.log(" Danh bạ trống.");
    return; 
  }
  console.log(" Danh bạ:");
  for (const contact of phoneBook) {
    console.log("-------------");
    console.log(`Tên   : ${contact.name}`);
    console.log(`SĐT   : ${contact.phone}`);
    console.log(`Email : ${contact.email}`);
  }
}
addContact("Tuan", "0373060230", "tuan20062012@gmail.com");
addContact("Minh", "0353013186", "Minh20062012@gmail.com");
displayContact(phoneBook);
