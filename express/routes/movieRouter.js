const express = require('express')
const { read, update, remove, add } = require('../controller/movieController')

const router = express.Router()

router.route('/read').get(read)

router.route('/update').post(update)

router.route('/remove').delete(remove)

router.route('/add').post(add)

module.exports = router