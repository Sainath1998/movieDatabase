const express = require('express')
const app = express()
app.use(express.json())
app.get('/',(req, res)=>{
    res.send('get request')
})


module.exports = app