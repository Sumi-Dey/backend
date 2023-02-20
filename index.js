const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const path = require('path');
const Port = process.env.PORT || 8000;
require('dotenv').config()
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO);
mongoose.connection.on('connected',() =>{
    console.log("connected to mongo");
})

require("./models/Hotel")
require("./models/Room")
require("./models/CountHotel")
require("./models/HotelCateory")
require("./models/User")

// app.get("/",(req, res)=>{
//  res.json({"data":"home"})
//  })

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use(require("./routes/hotel"))
app.use(require("./routes/auth"))
app.use(express.json());


if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'));

  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
  })
}

app.listen(Port, () => {
  console.log('server is running on port 8000 . . .');
})