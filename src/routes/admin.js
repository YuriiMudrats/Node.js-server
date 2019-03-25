//MAIN MODULES
const express = require('express')
const router = express.Router()
const path=require('path')
//Helper  func 
const rootDir=require('../util/path')

const products=[]
// /admin/add-product=> GET
router.get('/add-product', (req, res, next) => {   
    res.sendFile(path.join(__dirname,'../views', 'add-product.html'))
})

// /admin/add-product=> POST
router.post('/product', (req, res, next) => {
    console.log(req.body, 'to product')
    products.push({title:req.body.title})
    console.log(products)
    res.redirect('/')
})


exports.routes = router
exports.products=products