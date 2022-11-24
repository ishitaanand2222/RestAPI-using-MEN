//mongoose is an Object Data Modelling(ODM) for mongoDB and node.js. It manages relationship between data , provides schema
//Database - Database
//Tables - Collections
//Rows - Documents
//Column - Fields
const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    tech:{
        type : String,
        required : true
    },
    sub: {
        type: Boolean,
        required: true,
        default : false
    }
})

module.exports = mongoose.model('Alien',alienSchema)