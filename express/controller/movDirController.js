const Sequelize = require('../db/connection')
const {moviedir} = Sequelize.models
const add = async (req, res) => {
    const {directorId, movieId} = req.body
    const movDir = await moviedir.findOne({
        where: {
            directorId,
            movieId
        }
    })
    if (movDir) {
        res.json('The genre is already present')
    } else {
        const newMovDir = await moviedir.create({directorId,movieId})
        res.json(newMovDir)
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    const deletedUser = await moviedir.destroy({where: {
            id
        }});
    res.json(deletedUser)
}
const update = async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const updatedResult = await moviedir.update(updateData, {where: {
            id
        }});
    res.json(updatedResult)
}
const read = async (req, res) => {
    const movDir = await moviedir.findAll()
    res.json(movDir)
}

module.exports = {
    add,
    remove,
    update,
    read
}
