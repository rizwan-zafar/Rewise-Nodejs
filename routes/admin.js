const express = require("express");
const router = express.Router();
const path = require("path");
const productConterller = require("../controllers/productController");

router.get("/", (req, resp, next) => {
  resp.send("<h1>Admin Home Page?</h1>");
});

router.get("/add-product", productConterller.getAddProduct);
router.post("/add-product", productConterller.postAddProduct);


module.exports = router;
