const connection = require('../connection')
const {Sequelize,DataTypes} = require('sequelize')

const MovieGenre = connection.define('moviegenre')

MovieGenre.sync({alter:true}).then((data)=>{
    console.log('The table is synced')
}).catch((err)=>{
    console.log(err.message)
})

module.exports = MovieGenre