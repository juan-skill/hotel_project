
exports.getHotels = (req, res) => {
    const hotels = [
      {
        "id": "249942",
        "name": "Hotel Stefanos",
        "stars": 3,
        "price": 994.18,
        "image": "4900059_30_b.jpg",
        "amenities": [
          "safety-box",
          "nightclub",
          "deep-soaking-bathtub",
          "beach",
          "Business-center"
        ]  
      },
      {
        "id": "249943",
        "name": "Hotel New York",
        "stars": 3,
        "price": 994.18,
        "image": "4900059_30_b.jpg",
        "amenities": [
          "safety-box",
          "nightclub",
          "deep-soaking-bathtub",
          "beach",
          "Business-center"
        ]  
      }
    ]
    res.json(hotels);
  };


  exports.getHotel = (req, res) => {
    const hotel = {
      "id": req.params.id,
      "name": `Hotel Stefanos`,
      "stars": 3,
      "price": 994.18,
      "image": "4900059_30_b.jpg",
      "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "Business-center"
      ]
    }
    res.json(hotel);
  };


exports.getstars = (req, res) => {
    const hotel = {
      "id": "249943",
      "name": `Hotel Stefanos`,
      "stars": req.params.star,
      "price": 994.18,
      "image": "4900059_30_b.jpg",
      "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "Business-center"
      ]
    }
    res.json(hotel);
  };