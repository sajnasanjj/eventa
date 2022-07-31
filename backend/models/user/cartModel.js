const mongoose = require('mongoose');
const colors = require('colors')


const cartSchema = mongoose.Schema({
    name:{
        type:String,
    },
    image:{
        type:String,
    },
    price:{
        type:String,
    }
   
},
{
    timestamps:true
})

module.exports = mongoose.model('Cart',cartSchema)