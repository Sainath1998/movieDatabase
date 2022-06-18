const express = require('express')
const connection = require('./db/connection')
const app = express()
app.use(express.json())
app.get('/',(req, res)=>{
    res.send('get request')
})


module.exports = app