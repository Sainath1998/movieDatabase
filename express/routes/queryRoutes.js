const express = require('express')
const{actorsandroles,femaleActors,castOfFriends,actorsandmovies,moviesandactors} = require('../controller/queries')

const router = express.Router()

router.route('/actorsandroles').get(actorsandroles)
router.route('/femaleActors').get(femaleActors)
router.route('/castOfFriends').get(castOfFriends)
router.route('/actorsandmovies').get(actorsandmovies)
router.route('/moviesandactors').get(moviesandactors)

module.exports = router