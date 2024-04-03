const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const StudentModel = mongoose.model("studentdatatwo", studentSchema);

module.exports = { StudentModel };
