// import User from "./src/User";
const Person = require('./src/User.js');
// import Company from "./src/Company";
const Company = require('./src/Company.js');
//import express
const express = require("express");
const app = express();
//import faker
const { faker } = require("@faker-js/faker");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// code start here:

// create new user:
app.get("/api/user/new", (req, res) => {
  // console.log("**************************************");
  // console.log(faker.datatype.uuid());
  // console.log("**************************************");
  // console.log(faker.name.firstName());
  // console.log("**************************************");
  res.json(new Person());
});

// create new company:
app.get("/api/company/new", (req, res) => {
  res.json(new Company());
});

// create new user and company:
app.get("/api/user/company", (req, res) => {
  myCompany = new Company();
  myUser = new Person();
  res.json({myUser, myCompany});
  
});



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
