const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is home Page");
  } else if (req.url === "/data") {
    fs.readFile("./data.json", (err, data) => {
      if (err) {
        res.write(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/blog") {
    res.end("This is blog page");
  } else {
    res.end(http.STATUS_CODES["404"]);
  }
});

server.listen(8080, () => {
  console.log("server is running at 8080");
});
