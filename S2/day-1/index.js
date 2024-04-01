const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is home Page");
  } else if (req.url === "/data") {
    // fs.readFile("./data.json", (err, data) => {
    //   if (err) {
    //     res.write(err);
    //     res.end();
    //   } else {
    //     res.end(data);
    //   }
    // });
    const dataStream = fs.createReadStream("./data.json", "utf-8");
    dataStream.pipe(res);
  } else if (req.url === "/todo") {
    fs.readFile("./todo_data.json", "utf-8", (err, data) => {
      if (err) {
        res.write(err);
        res.end();
      } else if (req.url === "/adddata" && req.method === "POST") {
        let str = "";
        req.on("data", (chunk) => {
          str = str + chunk;
        });
        res.end("data added");
      } else {
        res.end(data);
      }
    });
  } else {
    res.end(http.STATUS_CODES["404"]);
  }
});

server.listen(8080, () => {
  console.log("server is running at 8080");
});
