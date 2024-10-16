const express=require('express')
const router=express.Router()

router.get('/',(req,resp,next)=>{
    resp.send("<h1>Admin Home Page?</h1>")
})

router.get('/all',(req,resp,next)=>{
    resp.send("<h1>all admin list?</h1>")
})

module.exports =router