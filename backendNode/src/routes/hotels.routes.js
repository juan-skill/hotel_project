const { Router } = require("express");
const controllerHotels = require("../controllers/hotels.controller");
const routerHotels = Router();

routerHotels.get('/', controllerHotels.getHotels);
  
routerHotels.get('/:id', controllerHotels.getHotel);
  
routerHotels.get('/star/:star', controllerHotels.getstars);

module.exports = routerHotels;