const mongoose = require('mongoose');
const Hotel = mongoose.model("Hotel");
const Rooms = mongoose.model("Room");
const CountHotel = mongoose.model("CountHotel");
const HotelCategory = mongoose.model("HotelCategory");



const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotels = await newHotel.save()
        res.status(200).json(savedHotels)

    } catch (error) {
        next(error)
    }
}

const updateHotel = async (req, res, next) => {
    try {
        const updateHotels = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateHotels)

    } catch (error) {
        next(error)
    }
}

const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id,)
        res.status(200).json("Hotel deleted")

    } catch (error) {
        next(error)
    }
}

const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)

    } catch (error) {
        next(error)
    }
}
const cityHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)

    } catch (error) {
        next(error)
    }
}

const getAllHotel = async (req, res, next) => {
    const { min, max, city, limit } = req.query
    try {
        const Hotels = await Hotel.find({ city, cheapestPrice: { $gt: min | 1, $lt: max | 1000000 } }).limit(limit);
        res.status(200).json(Hotels)


    } catch (error) {
        next(error)
    }
}
const getHotelByFilter = async (req, res, next) => {
    const { min, max, limit, ...others } = req.query
    try {
        const Hotels = await Hotel.find({ ...others, cheapestPrice: { $gt: min || 1, $lt: max || 9999999 } }).limit(limit);
        res.status(200).json(Hotels)


    } catch (error) {
        next(error)
    }
}
const getByFeature = async (req, res, next) => {
    const { feature, limit } = req.query
    try {
        const Hotels = await Hotel.find({ feature }).limit(limit);
        res.status(200).json(Hotels)
    } catch (error) {
        next(error)
    }
}
const getByCategory = async (req, res, next) => {
    const { category } = req.query;
    try {
        const Hotels = await Hotel.find({ category });
        res.status(200).json(Hotels)
    } catch (error) {
        next(error)
    }
}

 const countByCity = async (req, res, next) => {
    const {city} = req.query;
    try {
        const list = await Hotel.find({city});
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

 const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map(room => {
            return Rooms.findById(room)
        }))
        res.status(200).json(list)
    }
    catch (error) {
        next(error)
    }
}

 const createCity = async (req, res, next) => {
    const newCity = new CountHotel(req.body)
    try {
        const savedCity = await newCity.save()
        res.status(200).json(savedCity)

    } catch (error) {
        next(error)
    }
}

 const updateCityCount = async (req, res, next) => {
    // const id = req.params.id;
    const {city} = req.query;
        try {
            const cityCount = await Hotel.count({city})
            const Data = await CountHotel.findOneAndUpdate({city},{
                $set:{hotelCount:cityCount}
            })
            res.status(200).json(Data)
        } catch (error) {
            next(error)
        }
    }
 const getAllCity = async (req, res, next) => {
    const { limit } = req.query
        try {
            const allCities = await CountHotel.find().limit(limit)
            res.status(200).json(allCities)
    
        } catch (error) {
            next(error)
        }
    }
const createCategory = async (req, res, next) => {
    const newCat = new HotelCategory(req.body)
    try {
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)

    } catch (error) {
        next(error)
    }
}

const getAllCategoryCity = async (req, res, next) => {
    const { limit } = req.query
        try {
            const allCat = await HotelCategory.find().limit(limit)
            res.status(200).json(allCat)
    
        } catch (error) {
            next(error)
        }
    }



module.exports = {getAllHotel,createHotel,updateHotel,deleteHotel,getHotel,cityHotel,getByFeature,getByCategory,countByCity,getHotelRooms,createCity,updateCityCount,getAllCity,getAllCategoryCity,createCategory,getHotelByFilter}