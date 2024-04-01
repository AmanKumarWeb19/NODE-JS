const fs = require("fs");
const routeLogger = (req, res, next) => {
  const startTime = new Date().getTime();
  next();
  const endTime = new Date().getTime();

  fs.appendFileSync(
    "./routeDetails.txt",
    `Route Visited: ${req.url} | Method: ${req.method} | ResponseTime: ${
      endTime - startTime
    }\n`
  );
};

module.exports = {
  routeLogger,
};
