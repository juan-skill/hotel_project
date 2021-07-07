const Hotel = require('../models/hotel');

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find()
    res.json(hotels);
  } catch (error) {
    res.status(404).json({ "error": "Not Found" });
  }    
};


exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    console.log(hotel);
    res.json(hotel);
  } catch (error) {
    res.status(404).json({ "error": "Not Found" });
  }
};


exports.getstars = async (req, res) => {
  try {
    const hotel = await Hotel.find({"stars": req.params.star});
    res.json(hotel);
  } catch (error) {
    res.json(error);
  }
};