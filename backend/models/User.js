
const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
        
    },

},{timestamps:true})

module.exports = mongoose.model('User',UserSchema)