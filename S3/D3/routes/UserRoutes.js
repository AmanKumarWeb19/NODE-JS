const express = require("express");
const userRouter = express.Router();
const { CollegeModel } = require("../models/UserModel");

userRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const AllCollegeStudent = await CollegeModel.find(query);
    res.send(AllCollegeStudent);
  } catch (error) {
    res.send({ msg: "cannot get all college Student", error: error.message });
  }
});

userRouter.post("/register", async (req, res) => {
  try {
    const CollegeStudent = new CollegeModel(req.body);
    await CollegeStudent.save();
    res.send("College Student has been Registered");
  } catch (error) {
    res.send({ msg: "cannot registered", error: error.message });
  }
});

userRouter.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await CollegeModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send("College Data has been updated");
  } catch (error) {
    res.send({ msg: "cannot updated", error: error.message });
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await CollegeModel.findByIdAndDelete({ _id: ID });
    res.send("College Data has been deleted");
  } catch (error) {
    res.send({ msg: "cannot deleted", error: error.message });
  }
});

module.exports = { userRouter };
