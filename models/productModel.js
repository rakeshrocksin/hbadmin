var mongoose = require('mongoose');

var product = mongoose.model('Products',{

    prdid:{
        type: String,
        required: true,
        trim: true
    },
    prdname:{
        type: String,
        required: true,
        trim: true
    },
    prddesc:{
        type: String,
        required: true,
        trim: true
    },
    prdtype:{
        type: String,
        required: true,
        trim: true
    }
    
});


module.exports = {product};