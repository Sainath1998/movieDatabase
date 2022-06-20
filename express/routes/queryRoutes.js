const express = require('express')
const{actorsandroles,femaleActors} = require('../controller/queries')

const router = express.Router()

router.route('/actorsandroles').get(actorsandroles)
router.route('/femaleActors').get(femaleActors)

module.exports = router