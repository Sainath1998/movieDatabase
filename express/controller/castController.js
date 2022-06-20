const Sequelize = require('../db/connection')
const {moviecast} = Sequelize.models
const add = async (req, res) => {
    const t = await Sequelize.transaction();
    try {
        const {role, actorId, movieId} = req.body
        const moviecastExist = await moviecast.findOne({
            where: {
                role,
                actorId,
                movieId
            }
        })
        if (moviecastExist) {
            res.json('The movie cast is already present')
        } else {
            const newMovieCast = await moviecast.create({
                role,
                actorId,
                movieId
            }, {transaction: t})
            await t.commit();
            res.json(newMovieCast)
        }
    } catch (error) {
        await t.rollback();
    }
}
const remove = async (req, res) => {
    const t = await Sequelize.transaction();
    try {
        const id = req.params.id
        const deletedUser = await moviecast.destroy({
            where: {
                id
            }
        }, {transaction: t});
        await t.commit();
        res.json(deletedUser)
    } catch (error) {
        await t.rollback();
    }
}
const update = async (req, res) => {
    const t = await Sequelize.transaction();
    try {
        const id = req.params.id
        const updateData = req.body
        const updatedResult = await moviecast.update(updateData, {where: {
                id
            }},{transaction: t})
            await t.commit();
        res.json(updatedResult)
    } catch (error) {
        await t.rollback();
    }

}
const read = async (req, res) => {
    const allMovieCasts = await moviecast.findAll()
    res.json(allMovieCasts)
}

module.exports = {
    add,
    remove,
    update,
    read
}
