const Sequelize = require('../db/connection')
const {rating} = Sequelize.models

const add = async (req, res) => {
    const {movieId, ratings, reviewerId} = req.body
    const reviewExist = await rating.findOne({
        where: {
            movieId, ratings, reviewerId
        }
    })
    if (reviewExist) {
        res.json('The movie is already present')
    } else {
        const newReview = await rating.create({movieId, ratings, reviewerId})
        res.json(newReview)
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    const deletedUser = await rating.destroy({where: {
            id
        }});
    res.json(deletedUser)

}
const update = async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const updatedResult = await rating.update(updateData, {where: {
            id
        }});
    res.json(updatedResult)
}
const read = async (req, res) => {
    const allMovieGenre = await rating.findAll()
    res.json(allMovieGenre)
}

module.exports = {
    add,
    remove,
    update,
    read
}
