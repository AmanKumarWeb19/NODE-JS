const express = require("express");
const { connection, UserModel } = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.get("/users", async (req, res) => {
  const query = req.query;
  try {
    const allUsers = await UserModel.find(query);
    res.send(allUsers);
  } catch (error) {
    res.send({ msg: "cannot get users", error: error.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.send("user has been registered");
  } catch (error) {
    res.send({ msg: "cannot registered", error: error.message });
  }
});

app.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send("user has been updated");
  } catch (error) {
    res.send({ msg: "cannot update successfully", error: error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: ID });
    res.send("user has been deleted");
  } catch (error) {
    res.send({ msg: "cannot deleted successfully", error: error.message });
  }
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
