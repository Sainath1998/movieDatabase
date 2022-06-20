const express = require('express')
const connection = require('./db/connection')
const actorRouter = require('../express/routes/actorRouter')
const app = express()
app.use(express.json())

app.get('/',(req, res)=>{
    res.send('get request')
})

app.use('/api/v1/actor',actorRouter)
module.exports = app