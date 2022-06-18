const{Sequelize,DataTypes} = require('sequelize')
const connection = require('../connection')

const Genre = connection.define('genre',{
    gen_title:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false
    }
})
Genre.Sync({alter:true}).then((data)=>{
    console.log('The table is synced')
}).catch((err)=>{
    console.log(err.message)
})

module.exports = Genre