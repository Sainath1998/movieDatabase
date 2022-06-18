const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

const Reviewer = connection.define('reviewer',{
    rev_name:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false
    }
})

module.exports = Reviewer