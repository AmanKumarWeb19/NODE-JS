const dns = require("node:dns");
const cowsay = require("cowsay");
const fs = require("fs");

const writeToFile = (website) => {
  dns.lookup(website, (err, address, family) => {
    if (err) {
      console.log(err);
    } else {
      fs.appendFileSync(
        "./data.txt",
        `URL:${website} | Address: ${address} | Family:${family}\n`
      );
    }
  });
};

const readFromFile = (filename) => {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

const cowSay = (filename) => {
  let data = fs.readFileSync(filename, "utf-8");
  console.log(
    cowsay.say({
      text: data,
    })
  );
};

const  deleteFromFile = (filename) => {
  fs.unlink(filename, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${filename} has been deleted`);
    }
  });
};

module.exports = { writeToFile, readFromFile,  deleteFromFile, cowSay };
