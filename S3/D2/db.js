const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://aman:amankr@cluster0.efrkmbv.mongodb.net/university?retryWrites=true&w=majority&appName=Cluster0"
);

const userSchema = mongoose.Schema(
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

const UserModel = mongoose.model("user", userSchema);

module.exports = { connection, UserModel };
