const mongoose = require('mongoose');
const Hotel = mongoose.model("Hotel")


 const getAllHotel = async (req, res, next) => {
    // const { min, max, city, limit } = req.query
    try {
        const Hotels = await Hotel.find() //.find({ city, cheapestPrice: { $gt: min | 1, $lt: max | 1000000 } }).limit(limit);
        res.status(200).json(Hotels)


    } catch (error) {
        next(error)
    }
}

module.exports = getAllHotel