/** 
create a cutom validation middleware for express
the middleware should check for data validation before request reaches to routes
To test this middleware create a POST route for "movies " database
this route will accept:
ID:number,
Name:String,
Rating:Number,
Description:String,
Genre:String,
Cast:String[]
your job is to check if all the fields exist or not
if they exist check if they are correct type or not
if some data is inCorrect, the status code for bad request is 400, send that 
*/

const express = require("express");
const app = express();
app.use(express.json());
const morgan = require("morgan");
const fs = require("fs");
var path = require("path");

app.get("/", (req, res) => {
  res.send("welcome");
});

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

function validation(req, res, next) {
  const { id, name, genre, cast, rating, description } = req.body;

  if (
    typeof id === "number" &&
    typeof name === "string" &&
    typeof genre === "string" &&
    typeof rating === "number" &&
    typeof description === "string" &&
    Array.isArray(cast)
  ) {
    next();
  } else {
    res.send("validation failed");
  }
}

app.post("/movies/new", validation, async (req, res) => {
  try {
    console.log(req.body);
    res.send({ msg: "New Movies has been registered" });
  } catch (error) {
    res.send({
      msg: "can not Movies has been registered",
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("listing to port 5000");
});
