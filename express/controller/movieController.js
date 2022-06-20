const Sequelize = require('../db/connection')
const {movie} = Sequelize.models
const add = async (req, res) => {
    const {mov_title,mov_year} = req.body
    const movieExist = await movie.findOne({
        where:{
            mov_title,
            mov_year
        }
    })
    if(movieExist){
        res.json('The movie is already present')
    }else{
        const newMovie = await movie.create({mov_title,mov_year})
        res.json(newMovie)
    }
}

const remove = async (req, res) => {
    const id = req.params.id
    const deletedUser = await movie.destroy({
        where: {
           id
        }
    });
    res.json(deletedUser)
   
}
const update = async (req, res) => {
    const id = req.params.id
    const updateData = req.body
    const updatedResult = await movie.update(updateData, {
        where: {
          id
        }
      });
      res.json(updatedResult)

    
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