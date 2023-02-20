const {getAllHotel,createCategory,createHotel,updateHotel,deleteHotel,getHotel,cityHotel,getByFeature,getByCategory,countByCity,getHotelRooms,createCity,updateCityCount,getAllCity,getAllCategoryCity} = require('../controllers/hotel');
const {verifyAdmin} = require('../utlis/verifyToken');
const express = require("express")
const router = express.Router();


//UpdateCityCount
router.put("/updateCityCount", updateCityCount)
//CREATE
router.post("/hotel/createhotel",verifyAdmin,createHotel)
//UPDATE
router.put("/hotel/:id",verifyAdmin,updateHotel)
//DELETE
router.delete("/hotel/:id",verifyAdmin, deleteHotel)
//GET
router.get("/hotel/find/:id", getHotel)
//GET
router.get("/hotel/cityhotel/:id", cityHotel)
//GET ALL
router.get("/", getAllHotel);
//GetByCity
router.get("/hotel/getByFeature",getByFeature)
//GetByCategory
router.get("/hotel/getByCategory",getByCategory)
//CountByCity
router.get("/hotel/countByCity", countByCity)
//CreateCity
router.post("/hotel/createCity", createCity)
//GetAllCity
router.get("/getAllCity",getAllCity)
//getRoom
router.get("/hotel/room/:id", getHotelRooms)
//CreateCat
router.post("/hotel/createCategory", createCategory)
//GetAllCat
router.get("/hotel/getAllCategoryCity",getAllCategoryCity)



module.exports = router