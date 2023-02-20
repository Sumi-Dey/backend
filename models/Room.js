const mongoose = require('mongoose');


const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    maxPrice:{
        type:Number,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    maxPeople:{
        type:Number,
        require:true
    },
    photos:{
        type:[String]
    },
    roomNumbers:[{number: Number,unavailableDates:[{type:Date}]}],
    
})

mongoose.model("Room",RoomSchema)