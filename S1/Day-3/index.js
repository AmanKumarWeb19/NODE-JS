const fs = require('fs');

// Function to read a file
function readFile(filePath) {
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('File content:', data);
        }
    });
}

// Function to append content to a file
function appendFile(filePath, content) {
    fs.appendFile(filePath, content, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        } else {
            console.log('Content appended successfully.');
        }
    });
}

// Function to delete a file
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
        } else {
            console.log('File deleted successfully.');
        }
    });
}

// Function to create a file
function createFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error creating file:', err);
        } else {
            console.log('File created successfully.');
        }
    });
}

// Function to rename a file
function renameFile(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
        } else {
            console.log('File renamed successfully.');
        }
    });
}

// Function to list contents of a directory
function listDirectory(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error listing directory:', err);
        } else {
            console.log('Contents of directory:');
            files.forEach(file => {
                console.log(file);
            });
        }
    });
}

// Example usage
readFile("./text.txt");
appendFile("./text.txt", "Hi I am Aman Kumar part 1\n");
appendFile("./text.txt", "Hi I am Aman Kumar part 2\n");
deleteFile("./text.txt");
createFile("./text.txt", "Hi I am Aman Kumar");
renameFile("./text.txt", "./newtext.txt");
listDirectory('./');