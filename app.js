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
app.use((req,resp,next)=> resp.status(404).send("<h1>Page Not Found</h1>"))




app.listen(3000, () => {
  console.log("Servar Started on Port : 3000");
});
