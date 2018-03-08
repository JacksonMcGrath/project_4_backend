 
// --- Dependencies
const express = require('express');
const router = express.Router();

// --- Models
const User = require('../models/Users');
const Ingredient = require('../models/Ingredients');
const Bar = require('../models/Bars')

// --- Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

Ingredient.methods(['get', 'put', 'post', 'delete']);
Ingredient.register(router, '/ingredients');

Bar.methods(['get', 'put', 'post', 'delete']);
Bar.register(router, '/bars');

// --- Return router
module.exports = router;  