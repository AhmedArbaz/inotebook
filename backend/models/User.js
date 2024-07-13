
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

const User = mongoose.model("User",UserSchema);
module.exports = User;