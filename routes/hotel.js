const getAllHotel = require('../controllers/hotel');
const express = require("express")
const router = express.Router();


//GET ALL
router.get("/", getAllHotel);



module.exports = router