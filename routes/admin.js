const express=require('express')
const router=express.Router()
const path=require('path')

const products=[]
router.get('/',(req,resp,next)=>{
    resp.send("<h1>Admin Home Page?</h1>")
})

router.get("/add-product", (req, resp, next) => {
    resp.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  });
  router.post("/add-product", (req, resp, next) => {
    products.push({title:req.body.title})
    resp.redirect('/')
  });

exports.router =router;
exports.products= products;