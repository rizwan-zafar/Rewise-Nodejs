const express = require("express");
const router = express.Router();
const cartController = require("../controllers/shopController");
router.get("/", cartController.getMyCart);

router.get("/add/:id", cartController.postCart);

module.exports = router;
