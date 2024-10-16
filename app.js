const http = require("http");
const express = require("express");
const app = express();
const bodyParser=require('body-parser')
const shopRoutes=require('./routes/shop')
const adminRoutes=require('./routes/admin')

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, resp, next) => {
  resp.send("<h1>Welcome to ExpresJsss</h1>");
});

app.use(shopRoutes);
app.use(adminRoutes);




app.listen(3000, () => {
  console.log("Servar Started on Port : 3000");
});
