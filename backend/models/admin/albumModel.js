const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
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
module.exports = mongoose.model('Album',albumSchema)