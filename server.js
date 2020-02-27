const express = require('express')
const app = express()
const jwtRouter = require('./routers/jwtRouter')
port = 3000

function serverListing(){
    console.log('Server is listening to port'+ port);
    
}
app.use('/jwt',jwtRouter)
app.listen(port,serverListing)