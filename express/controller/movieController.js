const Sequelize = require('../db/connection')
const {movie} = Sequelize.models
const add = async (req, res) => {
    const t = await Sequelize.transaction()
    try {
        const {mov_title, mov_year} = req.body
        const movieExist = await movie.findOne({
            where: {
                mov_title,
                mov_year
            }
        })
        if (movieExist) {
            res.json('The movie is already present')
        } else {
            const newMovie = await movie.create({
                mov_title,
                mov_year
            }, {transaction: t})
            await t.commit()
            res.json(newMovie)
        }
    } catch (error) {
        await t.rollback()
    }
}

const remove = async (req, res) => {
    const t = await Sequelize.transaction()
    try {
        const id = req.params.id
        const deletedUser = await movie.destroy({
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
        const updatedResult = await movie.update(updateData, {
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
    const allMovies = await movie.findAll()
    res.json(allMovies)
}

module.exports = {
    add,
    remove,
    update,
    read
}
