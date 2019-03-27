const path=require('path')
const fs=require('fs')
// const products=[]

module.exports= class Product{
  constructor(t){
      this.title=t 
  }
  save(){
      const p = path.join(__dirname,'../data','product.json')
    fs.readFile(p, (err, data)=>{
        let products=[]
        if(!err){
            console.log(data)
            products=JSON.parse(data)
        }
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err)
        }); 
    })
    
  }
  static fetchAll(cb){
    const p = path.join(__dirname,'../data','product.json')  
    fs.readFile(p, (err, data)=>{
     
        if(err){
            cb([])
        }
        cb( JSON.parse(data))
    })
      
  }
}