const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

const Movie = connection.define('movie',{
    mov_title:{
        type:DataTypes.STRING,
        required:true
    },
    mov_year:{
        type:DataTypes.INTEGER,
        required:true
    }
})


module.exports = Movie