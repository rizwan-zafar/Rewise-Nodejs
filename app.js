const http = require("http");
const express = require("express");
const app = express();
const bodyParser=require('body-parser')
const studentRoutes=require('./routes/student')
const adminRoutes=require('./routes/admin')
const path=require('path')

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, resp, next) => {
  resp.send("<h1>Welcome to ExpresJsss</h1>");
});

app.use("/student",studentRoutes);
app.use('/admin',adminRoutes); //i have added '/admin' so now in url we need to add just /admin/routeinadmin
app.use((req,resp,next)=> resp.status(404).sendFile(path.join(__dirname,'./','views','404.html')))




app.listen(3000, () => {
  console.log("Servar Started on Port : 3000");
});
