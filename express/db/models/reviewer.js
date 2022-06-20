const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

module.exports = (sequelize)=>{
    sequelize.define('reviewer',{
        rev_name:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false,
        }
    })
}