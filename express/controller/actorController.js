require('dotenv').config()

const Actor = require('../db/models/actor')

const add = async(req, res)=>{
    res.send('This is add route')
}

const remove = async (req, res)=>{
    res.send('This is remove route')
}
const update = async (req, res)=>{
    res.send('This is update route')
}
const read = async (req, res)=>{
    res.send('This is read route')
}

module.exports = {
    add,
    remove,
    update,
    read
}