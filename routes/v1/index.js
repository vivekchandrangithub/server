const express = require('express');
const { userRouter } = require('./userRoutes');
const { foodRouter } = require('./foodRoutes');
const { restaurentRouter } = require('./restaurentRoutes');
const { cartRouter } = require('./cartRoutes');

const v1Router = express.Router();

v1Router.use('/user',userRouter);
v1Router.use('/food',  foodRouter);
v1Router.use('/restaurent', restaurentRouter);
v1Router.use('/cart', cartRouter);

module.exports = {v1Router};