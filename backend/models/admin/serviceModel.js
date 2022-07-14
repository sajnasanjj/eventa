
const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'Please add a name']
    },
    image:{
        type: String,
        required:[true,'Please add an Image']
    },
       
},
{
    timestamps:true
})
module.exports = mongoose.model('Service',serviceSchema)