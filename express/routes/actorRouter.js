const express = require('express')
const{read,update,remove,add} = require('../controller/actorController')

const router = express.Router()

router.route('/add').post(add)

router.route('/remove').delete(remove)

router.route('/update').patch(update)

router.route('/read').get(read)

module.exports = router