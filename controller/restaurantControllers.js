const Restaurant = require('../models/restaurentModel'); 

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
const getRestaurantById = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
const createRestaurant = async (req, res) => {
    const { name, location, cuisine, rating } = req.body;
    try {
        const newRestaurant = new Restaurant({
            name,
            location,
            cuisine,
            rating
        });
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
    }
};
const updateRestaurant = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
    }
};
const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
        if (!deletedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
};