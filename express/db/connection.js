const Sequelize = require('sequelize')
const extraSetup = require('../db/extrasetup')
require('dotenv').config()

const sequelize = new Sequelize('moviedatabase', process.env.databsename, process.env.databasepass, {dialect: 'mysql'})

sequelize.authenticate().then(() => {
    console.log('The databse connection successful')
}).catch((err) => {
    console.log(err.message)
})

const modelDefiners = [
    require('./models/actor'),
    require('./models/director'),
    require('./models/genre'),
    require('./models/movie_cast'),
    require('./models/movie_direction'),
    require('./models/movie_genre'),
    require('./models/movie'),
    require('./models/rating'),
    require('./models/reviewer')
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

extraSetup(sequelize);

sequelize.sync({alter: true})

module.exports = sequelize
