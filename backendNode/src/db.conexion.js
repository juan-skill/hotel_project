const mongoose = require('mongoose');

const conexionDB = async () => {
    try {
        const DB = await mongoose.connect('mongodb://localhost:27017/test-hotels', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Successful connection ", DB.Connection.name);
    } catch (error){

    }    
}

module.exports = conexionDB;