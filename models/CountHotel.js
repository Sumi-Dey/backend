const mongoose = require('mongoose');


const CountHotelSchema = new mongoose.Schema({
    city:{
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

mongoose.model("CountHotel",CountHotelSchema)