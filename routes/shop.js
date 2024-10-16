const express = require('express')
const router =express.Router()


router.get('/add-student', (req, resp, next) => {
    resp.send("<h1><form method='post' action='/student'><input type='text' name='title' /><input type='submit' value='Submit' /></h1>");
     
  });
  
  router.post('/student', (req, resp, next) => {
    console.log(req.body.title)
    resp.send("<h1>Contact</h1>");
  });

  module.exports =router