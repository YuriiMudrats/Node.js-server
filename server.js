const http =require('http')
const routes=require('./routes')

const config=require('./config')


const server=http.createServer(routes)

server.listen(config.PORT)