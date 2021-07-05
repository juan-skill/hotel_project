const Hotel = require('../models/hotel');

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find()
    res.json(hotels);
  } catch (error) {
    res.json(error);
  }    
};


exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.json(hotel);
  } catch (error) {
    res.json(error);
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