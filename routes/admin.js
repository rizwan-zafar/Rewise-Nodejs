const express = require("express");
const router = express.Router();
const path = require("path");
const adminController = require("../controllers/adminController");

router.get("/", (req, resp, next) => {
  resp.send("<h1>Admin Home Page?</h1>");
});
//  /admin/add-product
router.get("/add-product", adminController.getAddProduct);
// /admin/add-product
router.post("/add-product", adminController.postAddProduct);


module.exports = router;
 