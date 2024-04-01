const mongoose = require("mongoose");

const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/backend"
    );

    console.log("Connected to DB");
    // await StudentModel.insertMany([{ name: "chunnu", age: 29, city: "Patna" }]);
    const student = new StudentModel({
      name: "56",
      age: 30,
      city: "Bengaluru",
    });
    await student.save();

    console.log(student);
  } catch (error) {
    console.log(error);
  }
};
main();

const studentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const StudentModel = mongoose.model("student", studentSchema);
