const {getRoom,getRooms,createRoom,updateRoom,updateRoomAvailability,deleteRoom} = require('../controllers/room')
const express = require("express")
const router = express.Router();

//CREATE
router.post("/room/:hotelid",createRoom);
//UPDATE
router.put("/room/:id",updateRoom);
//UPDATEROOMAVAILABILITY
router.put("/room/availability/:id", updateRoomAvailability);
//DELETE
router.delete("/room/:id/:hotelid", deleteRoom);
//GET
router.get("/room/:id", getRoom);
//GET ALL
router.get("/getRooms", getRooms);


module.exports = router