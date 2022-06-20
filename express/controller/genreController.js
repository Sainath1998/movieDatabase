const Sequelize = require('../db/connection')
const {genre} = Sequelize.models
const add = async (req, res) => {
    const t = await Sequelize.transaction()
    try {
        const {gen_title} = req.body
        const genreExist = await genre.findOne({where: {
                gen_title
            }})
        if (genreExist) {
            res.json('The genre is already present')
        } else {
            const newGenre = await genre.create({
                gen_title
            }, {transaction: t})
            await t.commit()
            res.json(newGenre)
        }
    } catch (error) {
        await t.rollback()
    }
}

const remove = async (req, res) => {
    const t = await Sequelize.transaction()
    try {
        const id = req.params.id
        const deletedUser = await genre.destroy({
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
        const updatedResult = await genre.update(updateData, {
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
    const allGenres = await genre.findAll()
    res.json(allGenres)
}

module.exports = {
    add,
    remove,
    update,
    read
}
