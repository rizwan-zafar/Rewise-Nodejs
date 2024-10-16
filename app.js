const http = require("http");
const express = require("express");
const app = express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, resp, next) => {
  resp.send("<h1>Welcome to ExpresJsss</h1>");
});

app.get('/add-student', (req, resp, next) => {
  resp.send("<h1><form method='post' action='/student'><input type='text' name='title' /><input type='submit' value='Submit' /></h1>");
   
});

app.post('/student', (req, resp, next) => {
  console.log(req.body.title)
  resp.send("<h1>Contact</h1>");
});


app.listen(3000, () => {
  console.log("Servar Started on Port : 3000");
});
