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

app.set('view engine', 'pug')
app.set('views','src/views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))





app.use('/admin', adminRoutes.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'src','views','404.html'))
})
//LISTENER
app.listen(config.PORT)