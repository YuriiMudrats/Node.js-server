const path=require('path')

//MODELS
const Product=require('../models/product')

exports.getProducts=(req, res, next) => {  
    res.render('admin/add-product')  
    // res.sendFile(path.join(__dirname,'../views', '/add-product.html'))
}

exports.postAddProducts=(req, res, next) => {  
    const product=new Product(req.body.title)  
    product.save() 
    res.redirect('/')
}

exports.getProductsList=(req, res, next) => { 
   Product.fetchAll(products=>{
        res.render('shop/product-list', {prods:products}) 
    })     
      
}

