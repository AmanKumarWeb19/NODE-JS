const mongoose = require("mongoose");
const collegeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    language: { type: String, required: true },
    isMarried: { type: Boolean, required: true },
  },
  {
    versionKey: false,
  }
);

const CollegeModel = mongoose.model("studentdetail", collegeSchema);

module.exports = { CollegeModel };
