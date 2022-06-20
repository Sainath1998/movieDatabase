const Sequelize = require('../db/connection')
const {director} = Sequelize.models
const add = async (req, res) => {
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
        const newDir = await director.create({dir_fname, dir_lname})
        res.json(newDir)
    }
}
const remove = async (req, res) => {
    const id = req.params.id
    const deletedUser = await director.destroy({
        where: {
           id
        }
    });
    res.json(deletedUser)
}
const update = async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const updatedResult = await director.update(updateData, {
        where: {
          id
        }
      });
      res.json(updatedResult)
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
