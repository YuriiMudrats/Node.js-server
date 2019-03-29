const path=require('path')

//MODELS
const Product=require('../models/product')

exports.getProducts=(req, res, next) => {  
    res.render('admin/add-product')  
    // res.sendFile(path.join(__dirname,'../views', '/add-product.html'))
}

exports.postAddProducts=(req, res, next) => {  
    const {title,imageUrl,price,description}=req.body
    const product=new Product(title,imageUrl,price,description)  
    product.save() 
    res.redirect('/')
}

exports.getProductsList=(req, res, next) => { 
   Product.fetchAll(products=>{
        res.render('shop/product-list', {prods:products}) 
    })     
      
}
exports.getIndex=(req, res, next) => {   
    res.render('shop/index') 
}

exports.getCart=(req, res, next) => { 
        res.render('shop/cart',{path:'/cart'})      
}

exports.getCheckout=(req, res, next) => { 
    res.render('shop/checkout',{path:'/cart'})      
}


