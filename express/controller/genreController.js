const Sequelize = require('../db/connection')
const {genre} = Sequelize.models
const add = async (req, res) => {
    const {gen_title} = req.body
    const genreExist = await genre.findOne({
        where:{
            gen_title
        }
    })
    if(genreExist){
        res.json('The genre is already present')
    }else{
        const newGenre = await genre.create({gen_title})
        res.json(newGenre)
    }
}

const remove = async (req, res) => {
    res.json('This is genre remove')
}
const update = async (req, res) => {
    res.json('This is genre update')
}
const read = async (req, res) => {
    res.json('This is genre read')
}

module.exports = {
    add,
    remove,
    update,
    read
}
