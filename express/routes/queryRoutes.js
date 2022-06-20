const express = require('express')
const{actorsandroles,femaleActors,castOfFriends} = require('../controller/queries')

const router = express.Router()

router.route('/actorsandroles').get(actorsandroles)
router.route('/femaleActors').get(femaleActors)
router.route('/castOfFriends').get(castOfFriends)

module.exports = router