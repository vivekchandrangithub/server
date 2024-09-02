const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    cuisine: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
}, {
    timestamps: true 
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;