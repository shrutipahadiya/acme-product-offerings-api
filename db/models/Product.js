const {UUID,UUIDv4,INTEGER,STRING, UUIDV4} = require('sequelize');
const {db} = require('../db');

const Product = db.define('Product' ,{

    id:{
        primaryKey : true,
        type:UUID,
        defaultValue : UUIDV4,
    },
    name:{
        unique:true,
        type:STRING,

    },
    suggestedPrice:{
        type:INTEGER,
    }

}
 
)

module.exports =  Product
 