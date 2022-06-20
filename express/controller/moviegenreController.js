const Sequelize = require('../db/connection')
const {moviegenre} = Sequelize.models

const add = async (req, res) => {
    const {movieId, genreId} = req.body
    const movieExist = await moviegenre.findOne({
        where: {
            movieId,
            genreId
        }
    })
    if (movieExist) {
        res.json('The movie is already present')
    } else {
        const newMoviGenre = await moviegenre.create({movieId, genreId})
        res.json(newMoviGenre)
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    const deletedUser = await moviegenre.destroy({where: {
            id
        }});
    res.json(deletedUser)

}
const update = async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const updatedResult = await moviegenre.update(updateData, {where: {
            id
        }});
    res.json(updatedResult)
}
const read = async (req, res) => {
    const allMovieGenre = await moviegenre.findAll()
    res.json(allMovieGenre)
}

module.exports = {
    add,
    remove,
    update,
    read
}
