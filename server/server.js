const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
  const newUser = {
    id: Math.floor(Math.random() * 10000).toString(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    id: Math.floor(Math.random() * 10000).toString(),
    companyName: faker.company.companyName(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newCompany;
};

const newFakeUser = createUser();
const newFakeCompany = createCompany();

console.log(newFakeUser);
console.log(newFakeCompany);

app.get("/api", (req, res) => {
  res.json({ message: "Hello Server" });
});

app.get("/api/users/new", (req, res) => {
  res.json({ newFakeUser });
});

app.get("/api/companies/new", (req, res) => {
  res.json({ newFakeCompany });
});

app.get("/api/user/company", (req, res) => {
  res.json({ newFakeCompany, newFakeUser });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
