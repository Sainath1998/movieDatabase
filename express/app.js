const express = require('express')
const connection = require('./db/connection')
const actorRouter = require('../express/routes/actorRouter')
const movieRouter = require('../express/routes/movieRouter')
const dirRouter = require('../express/routes/dirRouter')
const genreRouter = require('../express/routes/genreRouter')
const reviewerRouter = require('../express/routes/reviewerRoute')
const castRouter = require('../express/routes/castRouter')
const movieGenreRouter = require('../express/routes/moviegenreRouter')
const app = express()
app.use(express.json())

app.get('/',(req, res)=>{
    res.send('get request')
})

app.use('/api/v1/actor',actorRouter)
app.use('/api/v1/movie',movieRouter)
app.use('/api/v1/director',dirRouter)
app.use('/api/v1/genre',genreRouter)
app.use('/api/v1/reviewer',reviewerRouter)
app.use('/api/v1/cast',castRouter)
app.use('/api/v1/moviegenre',movieGenreRouter)

module.exports = app