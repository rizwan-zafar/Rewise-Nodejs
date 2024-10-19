const express = require("express");
const router = express.Router();
const path = require("path");
const adminData=require('./admin')
const productConterller = require('../controllers/productController')

router.get("/", productConterller.getAllProducts);

module.exports = router;
