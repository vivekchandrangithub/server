const express = require("express");
const { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require("../../controller/restaurantControllers");


const router = express.Router();


router.get("/", getAllRestaurants);
router.get("/:id", getRestaurantById );
router.post("/", createRestaurant );
router.put("/:id", updateRestaurant );
router.delete("/:id", deleteRestaurant );


module.exports = { restaurentRouter: router };