const express = require('express')
const { read, update, remove, add } = require('../controller/moviegenreController')

const router = express.Router()

router.route('/read').get(read)

router.route('/update/:id').patch(update)

router.route('/remove/:id').delete(remove)

router.route('/add').post(add)

module.exports = router