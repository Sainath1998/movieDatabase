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
    const id = req.params.id
    const deletedUser = await genre.destroy({
        where: {
           id
        }
    });
    res.json(deletedUser)
}
const update = async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const updatedResult = await genre.update(updateData, {
        where: {
          id
        }
      });
      res.json(updatedResult)
}
const read = async (req, res) => {
    const allGenres = await genre.findAll()
    res.json(allGenres)
}

module.exports = {
    add,
    remove,
    update,
    read
}
