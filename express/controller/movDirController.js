const Sequelize = require('../db/connection')
const {moviedir} = Sequelize.models

const add = async (req, res) => {
    const t = await Sequelize.transaction()
    try {
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
            const newMovDir = await moviedir.create({
                directorId,
                movieId
            }, {transaction: t})
            await t.commit()
            res.json(newMovDir)
        }
    } catch (error) {
        await t.rollback()
    }

}

const remove = async (req, res) => {
    const t = await Sequelize.transaction()
    try {
        const id = req.params.id
        const deletedUser = await moviedir.destroy({
            where: {
                id
            }
        }, {transaction: t});
        await t.commit()
        res.json(deletedUser)
    } catch (error) {
        await t.rollback()
    }
}
const update = async (req, res) => {
    const t = await Sequelize.transaction()
    try {
        const id = req.params.id
        const updateData = req.body
        const updatedResult = await moviedir.update(updateData, {
            where: {
                id
            }
        }, {transaction: t});
        await t.commit()
        res.json(updatedResult)
    } catch (error) {
        await t.rollback()
    }
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
