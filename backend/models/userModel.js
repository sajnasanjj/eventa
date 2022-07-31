const mongoose = require('mongoose');
const colors = require('colors')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
        unique:true
    },
    status:{
      type:Boolean,
      required:true,
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('User',userSchema)