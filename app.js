const http = require("http");
const fs=require('fs')

const server = http.createServer((req, res) => {
  
  fs.appendFileSync("server.logs",`${req.url} \n`)
  
console.log(req)
  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
   return res.end();
  }else if (req.url === "/about") {
    res.write("<h1>About Pagee</h1>");
  return  res.end();
  }else{
    res.write("<h1>Page Not Found</h1>");
    return  res.end();
  }
});

server.listen(3000, () => {
  console.log("Server started at port : 3000");
});
