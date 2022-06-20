const Sequelize = require('../db/connection')
const {reviewer} = Sequelize.models
const add = async (req, res) => {
    const {rev_name} = req.body
    const reviewerExist = await reviewer.findOne({
        where:{
            rev_name
        }
    })
    if(reviewerExist){
        res.json('The movie is already present')
    }else{
        const newReviewer = await reviewer.create({rev_name})
        res.json(newReviewer)
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    const deletedUser = await reviewer.destroy({
        where: {
           id
        }
    });
    res.json(deletedUser)
    
}
const update = async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const updatedResult = await reviewer.update(updateData, {
        where: {
          id
        }
      });
      res.json(updatedResult)   
}
const read = async (req, res) => {
    const allMovies = await reviewer.findAll()
    res.json(allMovies)
}

module.exports = {
    add,
    remove,
    update,
    read
}