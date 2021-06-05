const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema
const ItemSchema = new Schema({
    //fields of the schema
    name:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//to export
module.exports = Item = mongoose.model('item',ItemSchema)       //creating a model item with ItemSchema