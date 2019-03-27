//MAIN MODULES
const express = require('express')
const router = express.Router()
const path=require('path')
//Helper  func 
const rootDir=require('../util/path')
//CONTROLLERS
const productsController=require('../controllers/products')

//MODEL


// /admin/add-product=> GET
router.get('/add-product', productsController.getProducts)

// /admin/add-product=> POST
router.post('/product', productsController.postAddProducts)


module.exports=router
