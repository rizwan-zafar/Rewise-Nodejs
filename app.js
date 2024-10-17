const http = require("http");
const express = require("express");
const app = express();
const bodyParser=require('body-parser')
const shopeRoutes=require('./routes/shop')
const adminRoutes=require('./routes/admin')
const path=require('path')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))  // used to import static folder like public - now we are able to access css files in pages


app.use("/",shopeRoutes);
app.use('/admin',adminRoutes); //i have added '/admin' so now in url we need to add just /admin/routeinadmin
app.use((req,resp,next)=> resp.status(404).sendFile(path.join(__dirname,'views','404.html')))




app.listen(3000, () => {
  console.log("Servar Started on Port : 3000");
});
