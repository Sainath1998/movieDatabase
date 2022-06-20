const{Op} = require('sequelize')
const Sequelize = require('../db/connection')
const{actor,director,genre,moviecast,moviedir,moviegenre,movie,rating,reviewer} = Sequelize.models

const actorsandroles = async(req, res)=>{
    const result = await actor.findAll({include:moviecast})
    res.json(result)
}

const femaleActors = async(req, res)=>{
    const result = await actor.findAll({include:moviecast,required:true,where:{
        gender:{
            [Op.ne]: 'm'
        }
    }})
    res.json(result)
}

const castOfFriends = async(req, res)=>{
    const result = await movie.findAll({include:moviecast,reqruired:true,where:{
        mov_title:{
            [Op.eq]: 'friends'
        }
    }})
    res.json(result)
}

module.exports = {
    actorsandroles,
    femaleActors,
    castOfFriends
}