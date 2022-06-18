const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

const Rating = connection.define('rating',{
    ratings:{
        type:DataTypes.STRING,
        required:true
    }
})

Rating.sync({alter:true}).then((data)=>{
    console.log('The table is synced')
}).catch((err)=>{
    console.log(err.message)
})

module.exports = Rating