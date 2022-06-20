const Sequelize = require('../db/connection')
const{actor,director,genre,moviecast,moviedir,moviegenre,movie,rating,reviewer} = Sequelize.models

const findAll = async(req, res)=>{
    const result = await actor.findAll({include:moviecast})
    res.json(result)
}

module.exports = {
    findAll
}