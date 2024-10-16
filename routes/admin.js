const express=require('express')
const router=express.Router()

router.get('/admin',(req,resp,next)=>{
    resp.send("<h1>Admin Home Page?</h1>")
})

module.exports =router