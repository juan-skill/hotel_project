const express = require('express');
const morgan = require('morgan');
const connectionDB = require('./db.conexion');
const routerHotels = require('./routes/hotels.routes');
const app = express();

// databases
connectionDB();

//settings
app.set('name', 'rest-api-nodejs');
app.set('port', process.env.port || 3000);

//middleware
app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send('Running server')
});

app.use(express.static("public"))
app.use('/api/hotels', routerHotels);

module.exports = app;