const express = require('express');
const router = express.Router();
const { requireSignin, authMiddleware, adminMiddleware } = require('../controllers/auth');
const { read, publicProfile, update, photo } = require('../controllers/user');

router.get('/user/profile', requireSignin, authMiddleware, read);     //requireSignin will check if the user exists, then authMiddleware will provide the profile of user using read method
router.get('/user/:username', publicProfile);                   //profile is an end point 
router.put('/user/update', requireSignin, authMiddleware, update);
router.get('/user/photo/:username', photo);

module.exports = router;