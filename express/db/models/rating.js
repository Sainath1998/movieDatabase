const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

module.exports = (sequelize)=>{
    sequelize.define('rating',{
        ratings:{
            type:DataTypes.STRING,
            required:true
        }
    })
} 