const Sequelize = require('sequelize')
require('dotenv').config()
const connection = new Sequelize('moviedatabase',process.env.databsename,process.env.databasepass,{
    dialect:'mysql'
})

connection.authenticate().then(()=>{
    console.log('The databse connection successful')
}).catch((err)=>{
    console.log(err.message)
})