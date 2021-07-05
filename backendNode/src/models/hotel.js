const { Schema, model } = require('mongoose');


const HotelSchema = new Schema({
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: [String]
});

module.exports = model("Hotel", HotelSchema);