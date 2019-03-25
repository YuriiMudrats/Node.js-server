//MAIN MODULES|
const express = require('express');
const path=require('path')

const router = express.Router();

const {products}=require("./admin")


router.get('/', (req, res, next) => {  
    console.log('shop.js',products) 
    res.render('shop', {prods:products}) 
    // res.sendFile(path.join(__dirname,'../views', 'shop.html'))
})

module.exports = router