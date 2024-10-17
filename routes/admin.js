const express=require('express')
const router=express.Router()
const path=require('path')
router.get('/',(req,resp,next)=>{
    resp.send("<h1>Admin Home Page?</h1>")
})

router.get("/add-product", (req, resp, next) => {
    resp.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  });

module.exports =router