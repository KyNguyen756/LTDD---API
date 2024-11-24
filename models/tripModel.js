const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: {
         type: String,
          required: true
    },
    location: {
         type: String,
          required: true 
    },
    date: {
         type: Date,
          required: true 
    },
    time: {
         type: String,
          required: true 
    },
    imageUrl: {
        type: String 
    },
    des: {
        type: String 
    },
    guideImg: {
        type: String
    }
}, { timestamps: true });

let Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;