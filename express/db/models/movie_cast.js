const {Sequelize, DataTypes} = require('sequelize')
const connection = require('../connection')
module.exports = (sequelize)=>{
    sequelize.define('moviecast',{
        role:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false,
            
        }
    })
}
