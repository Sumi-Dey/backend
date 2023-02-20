const {getAllHotel,createCategory,createHotel,updateHotel,deleteHotel,getHotel,cityHotel,getByFeature,getByCategory,countByCity,getHotelRooms,createCity,updateCityCount,getAllCity,getAllCategoryCity} = require('../controllers/hotel');
const express = require("express")
const router = express.Router();


//UpdateCityCount
router.put("/updateCityCount", updateCityCount)
//CREATE
router.post("/",createHotel)
//UPDATE
router.put("/:id",updateHotel)
//DELETE
router.delete("/:id", deleteHotel)
//GET
router.get("/find/:id", getHotel)
//GET
router.get("/cityhotel/:id", cityHotel)
//GET ALL
router.get("/", getAllHotel);
//GetByCity
router.get("/getByFeature",getByFeature)
//GetByCategory
router.get("/getByCategory",getByCategory)
//CountByCity
router.get("/countByCity", countByCity)
//CreateCity
router.post("/createCity", createCity)
//GetAllCity
router.get("/getAllCity",getAllCity)
//getRoom
router.get("/room/:id", getHotelRooms)
//CreateCat
router.post("/createCategory", createCategory)
//GetAllCat
router.get("/getAllCategoryCity",getAllCategoryCity)



module.exports = router