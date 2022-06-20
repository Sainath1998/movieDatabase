const express = require('express')
const{findAll} = require('../controller/queries')

const router = express.Router()

router.route('/findall').get(findAll)

module.exports = router