const express = require("express");
const router = express.Router();
const path = require("path");
const adminData=require('./admin')
const shopController = require('../controllers/shopController')

router.get("/", shopController.getIndex);
router.get("/products", shopController.getAllProducts);
router.get("/product/detail:id", shopController.getProductDetail);

module.exports = router;
