const Sequelize = require('../db/connection')
const {actor} = Sequelize.models

const add = async (req, res) => {
    const t = await Sequelize.transaction();
    try {
        const {fname, lname, gender} = req.body
        const actorExist = await actor.findOne({
            where: {
                fname,
                lname
            }
        })
        if (actorExist) {
            res.json('The actor already exist')
        } else {
            const newActor = await actor.create({
                fname,
                lname,
                gender
            }, {transaction: t})
            await t.commit();
            res.json(newActor)

        }
    } catch (error) {
        console.log(error)
        await t.rollback();
    }

}

const remove = async (req, res) => {
    const t = await Sequelize.transaction();
    const {fname, lname} = req.body
    try {
        const deletedUser = await actor.destroy({
            where: {
                fname,
                lname
            }
        }, {transaction: t})
        await t.commit()
        res.json(deletedUser)

    } catch (error) {
        await t.rollback();
    }

}
const update = async (req, res) => {
    const t = await Sequelize.transaction();
    try {
        const id = req.body.id
        const updateData = req.body
        const updatedResult = await actor.update(updateData, {
            where: {
                id
            }
        }, {transaction: t})
        await t.commit()
        res.json(updatedResult)
    } catch (error) {
        await t.rollback();
    }
}
const read = async (req, res) => {
    const allActors = await actor.findAll()
    res.json(allActors)
}

module.exports = {
    add,
    remove,
    update,
    read
}
