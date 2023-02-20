const mongoose = require('mongoose');


const HotelCategory = new mongoose.Schema({
    category:{
        type:String,
        require:true
    },
    hotelCount:{
        type:Number
    },
    Photos:{
        type:[String] 
    }
});

mongoose.model("HotelCategory",HotelCategory)