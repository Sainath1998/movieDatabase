const {Sequelize,DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
  sequelize.define('actor',{
        fname:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        lname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        gender:{
            type:DataTypes.CHAR
        }
    }).sync({alter:true}).then(()=>{
        
    }).catch((err)=>{
        console.log(err)
    })
}

