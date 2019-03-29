//MAIN MODULES|
const express = require('express');
const path=require('path')

const router = express.Router();

const {products}=require("../controllers/shop")
const productsController=require('../controllers/shop')


router.get('/', productsController.getIndex)

router.get('/products',productsController.getProductsList)

router.get('/cart',productsController.getCart)

router.get('/checkout',productsController.getCheckout)

module.exports = router