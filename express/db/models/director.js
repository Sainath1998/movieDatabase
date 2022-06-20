const {Sequelize,DataTypes} = require('sequelize')

module.exports =(sequelize)=>{
    sequelize.define('director',{
        dir_fname:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false,
        },
        dir_lname:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        }
    })
} 

