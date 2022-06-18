const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

const movieDirection = connection.define('moviedir')

movieDirection.sync({alter:true}).then((data)=>{
    console.log('Table is synced')
}).catch((err)=>{
    console.log(err.message)
})

module.exports = movieDirection