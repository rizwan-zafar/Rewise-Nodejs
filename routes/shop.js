const express = require("express");
const router = express.Router();
const path = require("path");
const adminData=require('./admin')
  

router.get("/", (req, resp, next) => {
   resp.render('shop',{products:adminData.products,docTitle:'Shops',path:'/'})
  // resp.sendFile(path.join(__dirname, "../", "views", "shop.html")); //    ../vews/shop.html
});

module.exports = router;
