const {UUID,UUIDv4,INTEGER,STRING, UUIDV4} = require('sequelize');
const {db} = require('../db');


//console.log("db is ",db)

const Company = db.define('Company' ,{

    id:{
        primaryKey : true,
        type:UUID,
        defaultValue : UUIDV4,
    },
    name:{
        unique:true,
        type:STRING,

    },
  }
)
 

module.exports =  Company