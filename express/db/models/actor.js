const {Sequelize,DataTypes} = require('sequelize')

const connection = require('../connection')

const Actor = connection.define('actor',{
    fname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    gender:{
        type:DataTypes.CHAR
    }
})

Actor.sync({alter:true}).then((data)=>{
    console.log('The table is synced')
}).catch((err)=>{
    console.log(err.message)
})


module.exports = Actor