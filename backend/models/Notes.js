const mongoose = require('mongoose')
const {Schema} = require('mongoose')



const NotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:'General'
    },
    Date:{
        type:Date,
        default:Date.now
        
    },

},{timestamps:true})

module.exports = mongoose.model('Notes',NotesSchema)