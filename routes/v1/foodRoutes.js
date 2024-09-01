const express = require('express');
const { getAllFoods, getFoodById, createFood, updateFood, deleteFood } = require('../../controller/foodControllers');

const router =express.Router();


router.get("/", getAllFoods);
router.get("/:id", getFoodById );
router.post("/", createFood); // Assume admin authorization required
router.put("/:id", updateFood ); // Assume admin authorization required
router.delete("/:id", deleteFood); // Assume admin authorization required

module.exports={foodRouter: router};