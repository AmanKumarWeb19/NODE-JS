const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contacts", (req, res) => {
  res.send("Contacts Page");
});

app.get("/data", (req, res) => {
  res.send("Data will shared");
});
app.listen(4500, () => {
  console.log("Server is running at 4500");
});
