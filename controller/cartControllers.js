const { Cart } = require("../models/foodModel");

const addToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { foodId } = req.body;
        const food = await food.findById(foodId);
        if (!food) {
            return res.status(404).json({ message: "food not found" });
        }
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, foods: [] });
        }
        const foodExists = cart.foods.some((item) => item.foodId.equals(foodId));
        if (foodExists) {
            return res.status(400).json({ message: "food already in cart" });
        }
        cart.foods.push({
            foodId,
            price: food.price,
        });
        cart.calculateTotalPrice();

        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const updateCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { foodId } = req.body;
        const food = await food.findById(foodId);
        if (!food) {
            return res.status(404).json({ message: "food not found" });
        }

        const cart = await Cart.findByIdAndUpdate({ _id: userId }, { $push: { foods: { foodId, price: food.price } } });
        cart.calculateTotalPrice();

        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { foodId } = req.body;

        // Find the user's cart
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        Cart.findByIdAndUpdate({ userId }, { $pull: { foods: foodId } });
        console.log(cart, "=====cart updated");

        res.status(200).json({ success: true, message: "cart item removed", data: cart });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

const getCart = async (req, res) => {
    try {
        const userId = req.user.id;

        const cart = await Cart.findOne({ userId }).populate("foods.foodId");
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

module.exports = { addToCart, removeFromCart, getCart, updateCart };
