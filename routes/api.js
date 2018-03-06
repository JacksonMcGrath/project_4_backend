 
// --- Dependencies
const express = require('express');
const router = express.Router();

// --- Routes
router.get('/yubar', (req , res) => {
	res.send('the api is working')
})

// --- Return router
module.exports = router;