const express = require('express')
const{read,add,remove} = require('../controller/actorMovieController')

const router = express.Router()

router.route('/read').get(read)

router.route('/add').post(add)

router.route('/remove').delete(remove)

module.exports = router