const {Sequelize, DataTypes} = require('sequelize')
const connection = require('../connection')
const MovieCast = connection.define('moviecast',{
    role:{
        type:DataTypes.STRING,
        required:true
    }
})

module.exports = MovieCast