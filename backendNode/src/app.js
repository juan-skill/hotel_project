const express = require('express');
const routerHotels = require('./routes/hotels.routes');
const app = express();

//settings
app.set('name', 'rest-api-nodejs');
app.set('port', process.env.port || 3000);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running server')
});

app.use('/api/hotels', routerHotels);

module.exports = app;