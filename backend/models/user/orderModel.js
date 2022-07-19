const mongoose = require('mongoose');
const colors = require('colors')


const orderSchema = mongoose.Schema({
     bride:{
        type:String,
        required:[true,'Please add a  bride name']
    },
     groom:{
        type:String,
        required:[true,'Please add a groom name']
    },
    phonenumber:{
        type:String,
        required:[true,'Please add a phonenumber'],
        unique:true
    },
    iam:{
        type:String,
        // required:[true,'Please select option']
    },
    service:{
        type:String,
        // required:[true,'Please select the service']
    },
    date:{
        type:String,
        // required:[true,'Please select the date']
    },
    days_event:{
        type:String,
        // required:[true,'Please select the days']
    },
    status:{
      type:Boolean,
    //   required:true,
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('Order',orderSchema)