const http = require("http");
const express=require("express")
const app=express()
app.use((req,resp,next)=>{
resp.send("<h1>Welcome to ExpresJs</h1>")
})
 app.listen(3000,()=>{
  console.log("Servar Started on Port : 3000")
 })
