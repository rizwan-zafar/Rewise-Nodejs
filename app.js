const http = require("http");
const express = require("express");
const app = express();
const bodyParser=require('body-parser')
const shopeRoutes=require('./routes/shop')
const adminRoutes=require('./routes/admin')
const path=require('path')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))  // used to import static folder like public - now we are able to access css files in pages

app.set('view engine', 'ejs') //setting pug as template engine
app.set('views','views') //2nd parameter will be name of folder where are views/pugFile are placed


app.use("/",shopeRoutes);
app.use('/admin',adminRoutes.router); //i have added '/admin' so now in url we need to add just /admin/routeinadmin
app.use((req,resp,next)=> resp.status(404).render('404',{docTitle:'404 - Not Found'}))




app.listen(3000, () => {
  console.log("Servar Started on Port : 3000");
});
