const{Sequelize,DataTypes} = require('sequelize')
module.exports = (sequelize)=>{
    sequelize.define('genre',{
        gen_title:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false
        }
    })
} 
