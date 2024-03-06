// NODEJS BASIC PROBLEM - I
// Create a backend project with a package.json file using the right command for it.
// Create two files "index.js" & "main.js".

// In "main.js" write the logic for following modules:

// writeToFile
// - Here you are going to write the URL, its IP Address and Family as per following format in a file named as "data.txt".
// - Example: URL: www.instagram.com | Address: 157.240.23.174 | IPv4
// - Should accept a single parameter "website", this website url has to be passed while running the index.js file in terminal.
// - Should write the content in the file, Synchronously.
// - Should contain the details of all the websites that you will be passing and not just only one.

// readFromFile
// - Here you are supposed to read whatever data is present in the file and show that in the terminal.
// - Should accept a single parameter "filename", this filename has to be passed while running the index.js file in terminal.
// - Should read the content from the passed file, Asynchronously.

// cowSay
//  - Hint : You need to search, install and use a package called "cowsay" from npm.
//  - Whatever data that is there in the "data.txt" file, the cow should say that.
//  - Go through the documentation of this npm package to understand better.
//  - Should accept a single parameter "filename", this filename has to be passed while running the index.js file in terminal.

// deleteFile
// - Here you are supposed to delete the "data.txt" file.
// - Should accept a single parameter "filename", this filename has to be passed while running the index.js file in terminal.
// - Should be carried out using the inbuilt fs node module.

// Import all these modules in "index.js".
// To run any of these functions, the user needs to pass a specific keyword and the required parameters while running the "index.js" file.

// The keywords are write for "writeToFile" module, read for "readFromFile" module, cow for "cowSay" module, delete for "deleteFile" module.

// For Example:
// - node index.js write www.instagram.com ==> write all the required details.
// - node index.js read data.txt ==> Read all the details from the file.
// - node index.js cow data.txt ==> whatever is there in the file the cow should say that.
// - node index.js delete data.txt ==> Delete the file.

const { writeToFile, readFromFile, deleteFromFile, cowSay } = require("./main");
let keyword = process.argv[2];
let arg = process.argv[3];

if (keyword === "write") {
  writeToFile(arg);
} else if (keyword === "read") {
  readFromFile(arg);
} else if (keyword === "delete") {
  deleteFromFile(arg);
} else if (keyword === "cow") {
  cowSay(arg);
}
