const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        Food: [
            {
                courseId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "food",
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);

cartSchema.methods.calculateTotalPrice = function () {
    this.totalPrice = this.courses.reduce((total, course) => total + course.price, 0);
};

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };