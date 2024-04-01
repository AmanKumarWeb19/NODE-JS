const express = require("express");
const fs = require("fs");
const { routeLogger } = require("./middleware/Logger.middleware");

const app = express();

app.use(routeLogger);

app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  console.log("About Page");
  res.send("About Page");
});

app.get("/contacts", (req, res) => {
  console.log("contacts Page");
  res.send("Contacts Page");
});

app.get("/data", (req, res) => {
  let data = fs.readFileSync("./data.json", "utf-8");
  res.send(data);
});
app.listen(4500, () => {
  console.log("Server is running at 4500");
});
