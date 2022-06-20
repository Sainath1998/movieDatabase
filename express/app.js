const express = require('express')
const connection = require('./db/connection')
const actorRouter = require('../express/routes/actorRouter')
const movieRouter = require('../express/routes/movieRouter')
const app = express()
app.use(express.json())

app.get('/',(req, res)=>{
    res.send('get request')
})

app.use('/api/v1/actor',actorRouter)
app.use('/api/v1/movie',movieRouter)

module.exports = app