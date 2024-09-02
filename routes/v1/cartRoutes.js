const express = require("express");
const { userAuth } = require("../../middlewares/userAuth");
const { addToCart, updateCart, getCart, removeFromCart } = require("../../controller/cartControllers");


const router = express.Router();

router.post("/add-to-cart", userAuth,addToCart );
router.put("/remove", userAuth,updateCart );
router.get("/", userAuth, getCart);
router.delete("/",removeFromCart);

module.exports = { cartRouter: router };