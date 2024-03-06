const fs = require("fs");
fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
fs.writeFile("./text.txt", "I am Aman Kumar and I am doing NodeJs\n", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Data is entered");
  }
});
