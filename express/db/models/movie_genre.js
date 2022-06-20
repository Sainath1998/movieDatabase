const connection = require('../connection')
const {Sequelize,DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('moviegenre')
} 
