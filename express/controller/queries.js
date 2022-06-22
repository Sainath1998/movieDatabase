const{Op} = require('sequelize')
const Sequelize = require('../db/connection')
const{actor,director,genre,moviecast,moviedir,moviegenre,movie,rating,reviewer,actormovie} = Sequelize.models

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

const actorsandmovies = async (req, res)=>{
    try{
        const result = await  actor.findAll({
            include:[{
                model:movie,
                attributes:["mov_title"]
                
            }
            ]
        })
    
        res.json(result)
    }catch(error){
        res.json(error.message)
    }    
}

const moviesandactors = async (req, res)=>{
    try{
        const result = await  movie.findAll({
            include:[{
                model:actor,
                required: true 
            }
            ]
        }) 
        res.json(result)
    }catch(error){
        res.json(error.message)
    }    
}
module.exports = {
    actorsandroles,
    femaleActors,
    castOfFriends,
    actorsandmovies,
    moviesandactors
}