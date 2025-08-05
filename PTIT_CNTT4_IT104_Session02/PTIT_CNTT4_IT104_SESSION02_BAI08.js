const user = [
  {
    name: "John",
    age: 25,
    location: {
      city: "Hanoi",
      country: "Vietnam",
    },
    contact: {
      email: "john@example.com",
      phone: "0123456789",
    },
    job: {
      title: "Developer",
      company: "Tech Corp",
    },
  },
  {
    name: "Tuan",
    age: 18,
    location: {
      city: "Hanoi",
      country: "Vietnam",
    },
    contact: {
      email: "tuan20062012@gmail.con",
      phone: "0123456789",
    },
    job: {
      title: "Developer",
      company: "Tech Corp",
    },
  },
  {
    name: "lmao",
    age: 25,
    location: {
      city: "Hanoi",
      country: "Vietnam",
    },
  },
];

const [a, b, c] = user;
function displayUserInfo(user) {
  const { name, age, location, contact = "unknow", job = "unknow" } = user;
  console.log(
    `${name} is ${age} year old,lives in ${location.city},${location.country},work as ${job.title} at ${job.company}, contact ${contact.email}`
  );
}

displayUserInfo(a);
displayUserInfo(c);
