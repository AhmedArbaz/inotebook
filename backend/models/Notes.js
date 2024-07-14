const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')
const {Schema} = require('mongoose')



const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, //ya link kar rhay hain kay hamin user ki id la kay do ais Notes model may 
        ref:"User"
    },
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