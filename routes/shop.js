const express = require("express");
const router = express.Router();
const path = require("path");



router.get("/", (req, resp, next) => {
  resp.sendFile(path.join(__dirname, "../", "views", "shop.html")); //    ../vews/shop.html
});

module.exports = router;
