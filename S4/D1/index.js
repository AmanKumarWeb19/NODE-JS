const express = require("express");
const { connection } = require("./config/db");
const { UserModel } = require("./model/UserModel");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/register", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.send({ msg: "Users Registered" });
  } catch (error) {
    res.send({ msg: "Something went Wrong", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const token = jwt.sign({ course: "backend" }, "masai");
  try {
    const user = await UserModel.find({ email, pass });
    if (user.length > 0) {
      res.send({ msg: "Login Successfull", token: token });
    } else {
      res.send({ msg: "Wrong Credential" });
    }
  } catch (error) {
    res.send({ msg: "Something went Wrong", error: error.message });
  }
});

app.get("/data", (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, "masai", (err, decoded) => {
    if (decoded) {
      res.send({ msg: "Data is here" });
    } else {
      res.send({ msg: "Something went Wrong" });
    }
  });
});

app.get("/cart", (req, res) => {
  res.send("Cart Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Cannot connected to MongoDb");
    console.log({ msg: error.message });
  }

  console.log(`Server is running at Port ${process.env.PORT}`);
});
