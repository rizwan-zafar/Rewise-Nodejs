const http = require("http");
const express = require("express");
const app = express();

const bodyParser=require('body-parser')
const path=require('path')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))  // used to import static folder like public - now we are able to access css files in pages


//setting Handlebar
const {engine}=require('express-handlebars')
app.engine('hbs', engine({ extname: '.hbs',defaultLayout:false})); // note: then name that we are using here will be extenstion of file like 404.hbs
app.set('view engine', 'hbs')  //settitng hbs as default engine
app.set('views','views')  //setting views as views


const shopeRoutes=require('./routes/shop')
const adminRoutes=require('./routes/admin')

//routes
app.use("/",shopeRoutes);
app.use('/admin',adminRoutes); //i have added '/admin' so now in url we need to add just /admin/routeinadmin
app.use((req,resp,next)=> resp.status(404).render('404',{docTitle:"Page not Found"}))




app.listen(3000, () => {
  console.log("Servar Started on Port : 3000");
});
