//MAIN MODULES
const express = require('express')
const bodyParser = require('body-parser')
const path=require('path')

//ROUTERS
const adminRoutes = require('./src/routes/admin')
const shopRoutes = require('./src/routes/shop')

//CONFIG
const config = require('./config')


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))





app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'src','views','404.html'))
})
//LISTENER
app.listen(config.PORT)