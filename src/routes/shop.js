//MAIN MODULES|
const express = require('express');
const path=require('path')

const router = express.Router();

const {products}=require("../controllers/products")
const productsController=require('../controllers/products')


router.get('/', productsController.getProductsList)

module.exports = router