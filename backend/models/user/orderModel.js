const mongoose = require('mongoose');
const colors = require('colors')
const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId


const orderSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    user:{
      type:ObjectId,
      ref:"User"
    },
    
    date:String,
    
    razorpay: {
      orderId: String,
      paymentId: String,
      signature: String,
    },

     bride:{
        type:String,
    },
     groom:{
        type:String,
    },
    phonenumber:{
        type:String,
    },
    iam:{
        type:String,
    },
    start_date:{
        type:String,
    },
    end_date:{
        type:String
    },
    
    address:{
        type:String,
    },
    street:{
        type:String,
   },
    city:{
        type:String,
    },
    postal_code:{
        type:String
    },
    district:{
        type:String
    },
    country:{
        type:String
    },
    events:{
        type:String
    },
    photography:{
        type:String
    },
    catering:{
        type:String
    },
    decor:{
        type:String
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('Order',orderSchema)