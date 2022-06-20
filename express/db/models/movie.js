const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

module.exports = (sequelize)=>{
    sequelize.define('movie',{
        mov_title:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        },
        mov_year:{
            type:DataTypes.INTEGER,
            required:true,
            allowNull:false
        }
    })
} 
