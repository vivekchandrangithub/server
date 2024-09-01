const { Food } = require("../models/foodModel"); // Ensure you have a Food model


const getAllFoods = async (req, res, next) => {
    try {
        const foods = await Food.find();
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const getFoodById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const food = await Food.findById(id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }
        res.json({ success: true, data: food });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const createFood = async (req, res, next) => {
    try {
        const { name, description, price, category } = req.body;
        if (!name || !price) {
            return res.status(400).json({ success: false, message: "Name and price are required" });
        }
        const newFood = new Food({ name, description, price, category });
        await newFood.save();
        res.status(201).json({ success: true, message: "Food item created", data: newFood });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const updateFood = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedFood = await Food.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedFood) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }
        res.json({ success: true, message: "Food item updated", data: updatedFood });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const deleteFood = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedFood = await Food.findByIdAndDelete(id);
        if (!deletedFood) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }
        res.json({ success: true, message: "Food item deleted" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = { getAllFoods, getFoodById, createFood, updateFood, deleteFood };
