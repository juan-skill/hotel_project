const express = require('express')
const app = express()
const port = 3000

app.get('/status', (req, res) => {
  res.send('Running server')
})

app.get('/hotels', (req, res) => {
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
})

app.get('/hotels/:id', (req, res) => {
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
})

app.get('/hotels/star/:star', (req, res) => {
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
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})