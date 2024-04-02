const express = require("express");
const { connection } = require("./db");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.get("/users", (req, res) => {
  res.send("All the users data will be send");
});

app.listen(5050, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log("Cannot Connnected to DB");
    console.log("error");
  }
  console.log("Running the server at 5050");
});
