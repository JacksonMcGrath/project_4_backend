
// --- Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// --- Schema 
const userSchema = new mongoose.Schema({
	username: String,
	first_name: String,
	last_name: String,
	bars: Array,
});

// --- Return model
module.exports = restful.model('User', userSchema);