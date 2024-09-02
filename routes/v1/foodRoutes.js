const express = require('express');
const { getAllFoods, getFoodById, createFood, updateFood, deleteFood } = require('../../controller/foodControllers');

const router =express.Router();


router.get("/", getAllFoods);
router.get("/:id", getFoodById );
router.post("/", createFood); 
router.put("/:id", updateFood ); 
router.delete("/:id", deleteFood); 

module.exports={foodRouter: router};