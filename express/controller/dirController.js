const Sequelize = require('../db/connection')
const {director} = Sequelize.models
const add = async (req, res) => {
    const t = await Sequelize.transaction();
    try {
        const {dir_fname, dir_lname} = req.body
        const dirExist = await director.findOne({
            where: {
                dir_fname,
                dir_lname
            }
        })
        if (dirExist) {
            res.json('The movie is already present')
        } else {
            const newDir = await director.create({
                dir_fname,
                dir_lname
            }, {transaction: t})
            await t.commit();
            res.json(newDir)
        }
    } catch (error) {
        await t.rollback();
    }

}
const remove = async (req, res) => {
    const t = await Sequelize.transaction();
    try {
        const id = req.params.id
        const deletedUser = await director.destroy({
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
        const updatedResult = await director.update(updateData, {where: {
                id
            }},{transaction: t});
            await t.commit();
        res.json(updatedResult)
    } catch (error) {
        await t.rollback();
    }
}
const read = async (req, res) => {
    const allDirectors = await director.findAll()
    res.json(allDirectors)
}

module.exports = {
    add,
    remove,
    update,
    read
}
