const express = require('express');

const router =express.Router();

router.post('/signup',);
router.post('/login',);
router.post('/logout',);

router.get('/profile',);
router.put('/update',);
router.delete('/delete',);

router.get('/check-user')
router.get('/userList',);

module.exports={userRouter: router};