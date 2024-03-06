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

fs.rename("./text.txt", "./newText.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("rename the file name");
  }
});

fs.appendFile("./newText.txt", "I am the king kohli fan\n", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("append the file");
  }
});
fs.unlink("./text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("delete teh file");
  }
});
