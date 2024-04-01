const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json()); //middleware

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.send("<h1>Home Page</h1>");
});

app.get("/data", (req, res) => {
  const dataStream = fs.createReadStream("./data.json", "utf-8");
  dataStream.pipe(res);
});

app.post("/adddata", (req, res) => {
  console.log(req.body);
  res.send("Data has been added");
});

app.get("/students", (req, res) => {
  const data = fs.readFileSync("./data.json", "utf-8");
  const parsed_data = JSON.parse(data);
  console.log(parsed_data);
  res.send(parsed_data.students);
});

app.get("/teacher", (req, res) => {
  const data = fs.readFileSync("./data.json", "utf-8");
  const parsed_data = JSON.parse(data);
  console.log(parsed_data);
  res.send(parsed_data.Teachers);
});

app.post("/addstudent", (req, res) => {
  // Step 1 :-Get the Complete data withe the help of fs.readFileSync.
  const data = fs.readFileSync("./data.json", "utf-8");

  // Step 2 :-
  const parsed_data = JSON.parse(data);

  // Step 3 :-
  parsed_data.students.push(req.body);

  //step 4:- Adding data to the database
  fs.writeFileSync("./data.json", JSON.stringify(parsed_data));

  console.log(parsed_data);
  res.send("look in terminal");
});

app.delete("/deletestudent", (req, res) => {
 // Step 1: Get the complete data with fs.readFileSync.
 const data = fs.readFileSync("./data.json", "utf-8");
 // Step 2: Parse the data.
 const parsed_data = JSON.parse(data);
 // Step 3: Filter out the student to be deleted.
 const new_Student_Data = parsed_data.students.filter((student) => {
   return student.name !== "mk"; // Filter based on the student's name.
 });
 // Step 4: Update the students array with the filtered data.
 parsed_data.students = new_Student_Data;
 // Step 5: Write the updated data back to the file.
 fs.writeFileSync("./data.json", JSON.stringify(parsed_data));
 console.log(parsed_data);
 res.send("Data is deleted");
});

app.listen(4500, () => {
  console.log("server is running at 4500 port");
});
