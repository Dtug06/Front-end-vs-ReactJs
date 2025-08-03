const response = {
                data: {
                    id: 1,
                    title: "Destructuring in JavaScript",
                    author: {
                        name: "Dev",
                        email: "Dev@gmail.com",
                    },
                },
            };
const {title,author}=response.data;
console.log(`${title}`);
console.log(`${author.name}`);
console.log(`${author.email}`);

