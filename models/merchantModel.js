var mongoose = require('mongoose');

var merchant = mongoose.model('Merchants',{

    mrcid:{
        type: String,
        required: true,
        trim: true
    },
    mrcname:{
        type: String,
        required: true,
        trim: true
    },
    mrclocation:{
        type: String,
        required: true,
        trim: true
    },
    mrccountry:{
        type: String,
        required: true,
        trim: true
    }
    
});


module.exports = {merchant};