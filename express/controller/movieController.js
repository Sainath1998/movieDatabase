const Sequelize = require('../db/connection')
const {movie} = Sequelize.models
const add = async (req, res) => {
    res.send('Movie add')
}

const remove = async (req, res) => {
    res.send('Movie remove')
   
}
const update = async (req, res) => {
    res.send('Movie update')
    
}
const read = async (req, res) => {
    res.send('Movie read')
    
}

module.exports = {
    add,
    remove,
    update,
    read
}