const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/add-student", (req, resp, next) => {
  resp.sendFile(path.join(__dirname, "../", "views", "add-student.html"));
});

router.get("/", (req, resp, next) => {
  resp.sendFile(path.join(__dirname, "../", "views", "students.html")); //    ../vews/shop.html
});

module.exports = router;
