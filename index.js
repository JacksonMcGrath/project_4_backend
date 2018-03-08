
// --- Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

// --- MongoDB Database
mongoose.connect('mongodb://localhost/afyabars', {
	useMongoClient: true
})

mongoose.connection.once('open', () => {
	console.log('--- connected to mongoDB');
})

// --- Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// --- Routes
app.use('/api', require('./routes/api'));

// --- Start Server
app.listen(3000, () => {
	console.log(' --- the API is listening on port 3k baby');
})