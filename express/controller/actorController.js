const Sequelize = require('../db/connection')
const {actor} = Sequelize.models
const add = async (req, res) => {
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
        const newActor = await actor.create({fname, lname, gender})
        res.json(newActor)
    }
}

const remove = async (req, res) => {
    const {fname, lname} = req.body
    const deletedUser = await actor.destroy({
        where: {
            fname,
            lname
        }
    });
    res.json(deletedUser)
}
const update = async (req, res) => {
    const id = req.body.id
    const updateData = req.body
    const updatedResult = await actor.update(updateData, {
        where: {
          id
        }
      });
      res.json(updatedResult)
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
