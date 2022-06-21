const Sequelize = require('../db/connection')
const {actorMovie} = Sequelize.models

const add = async(req, res)=>{
    const t = await Sequelize.transaction();
    try {
     const{actorId, movieId} = req.body
     const Exist = await actorMovie.findOne({
        where: {
            actorId, movieId
        }
    })
    if (Exist) {
        res.json('The movie cast is already present')
    }else {
        const newData = await actorMovie.create({actorId, movieId},{transaction: t})
        await t.commit();
        res.json(newData)
    }
    } catch (error) {
        await t.rollback()
    }
}

const read = async (req, res) => {
    const t = await Sequelize.transaction();
    try {
     const data = await actorMovie.findAll()
     res.json(data)
    } catch (error) {
        
    }
}

const remove = async (req, res)=>{
    const t = await Sequelize.transaction();
    try {
     res.json('deleteing user')
    } catch (error) {
        
    }
}

module.exports = {
    read,
    add,
    remove
}