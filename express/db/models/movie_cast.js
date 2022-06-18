const {Sequelize, DataTypes} = require('sequelize')
const connection = require('../connection')
const MovieCast = connection.define('moviecast',{
    role:{
        type:DataTypes.STRING,
        required:true
    }
})

MovieCast.sync({alter:true}).then((data)=>{
    console.log('Tables are synced')
}).catch((err)=>{
    console.log(err.message)
})

module.exports = MovieCast