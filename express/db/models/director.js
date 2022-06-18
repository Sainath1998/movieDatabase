const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

const Director = connection.define('director',{
    dir_fname:{
        type:DataTypes.STRING,
        required:true
    },
    dir_lname:{
        type:DataTypes.STRING,
        required:true
    }
})

Director.sync({alter:true}).then((data)=>{
    console.log('Tables are synced')
}).catch((err)=>{
    console.log(err.message)
})

module.exports = Director