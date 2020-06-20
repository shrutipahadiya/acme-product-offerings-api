const {UUID,UUIDv4,INTEGER,STRING, UUIDV4} = require('sequelize');
const {db} = require('../db');

const Offering = db.define('Offering' ,{
    Price:{
        type:INTEGER,
    }

}
 
)

module.exports =  Offering
 