const express = require("express");
const { StudentModel } = require("../models/StudentModel");

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const student = await StudentModel.find(query);
    res.send(student);
  } catch (error) {
    res.send({ msg: "student Data not here", error: error.message });
  }
});

studentRouter.post("/register", async (req, res) => {
  try {
    const student = new StudentModel(req.body);
    await student.save();
    res.send("Student data has been registered");
  } catch (error) {
    res.send({ msg: "student Data not registeres", error: error.message });
  }
});

studentRouter.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await StudentModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send("Student data has been updated");
  } catch (error) {
    res.send({ msg: "student Data not updated", error: error.message });
  }
});

studentRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await StudentModel.findByIdAndDelete({ _id: ID });
    res.send("Student data has been deleted");
  } catch (error) {
    res.send({ msg: "student Data not deleted", error: error.message });
  }
});

module.exports = { studentRouter };
