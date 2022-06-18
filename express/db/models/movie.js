const {Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

const Movie = connection.define('movie',{
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

Movie.sync({alter:true}).then((data)=>{
    console.log('Table is synced')
}).catch((err)=>{
    console.log(err.message)
})



module.exports = Movie1