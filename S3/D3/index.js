const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const { userRouter } = require("./routes/UserRoutes");
const { studentRouter } = require("./routes/StudentRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/users", userRouter);
app.use("/students", studentRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Cannot connected to MongoDb");
    console.log({ msg: error.message });
  }
  console.log(`server is running at ${process.env.PORT}`);
});
