
require('dotenv').config()

const express = require('express')
const app = express()
const jwtRouter = require('./routes/jwtRoutes')
port = 3000

app.use(express.json())
app.use('/',jwtRouter)
function serverListing(){
    console.log('Server is listening to port'+ port);    
}


app.listen(port,serverListing)