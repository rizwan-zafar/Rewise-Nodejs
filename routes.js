const fs = require("fs");
const requestHandler = (req, res) => {
  fs.appendFileSync("server.logs", `${req.url} \n`);
  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
    return res.end();
  } else if (req.url === "/about") {
    res.write("<h1>About Pagee</h1>");
    return res.end();
  } else {
    res.write("<h1>Page Not Found</h1>");
    return res.end();
  }
};
module.exports=requestHandler
