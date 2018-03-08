
// --- Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// --- Schema 
const barSchema = new mongoose.Schema({
	name: String,
	ingredients: Array,
	// calories: Number,
	// protein: Number,
	// carbs: Number,
	// fiber: Number,
	// sugar: Number,
	// total_fat: Number,
	// sat_fat: Number,
	// cholesterol: Number,
});

// --- Return model
module.exports = restful.model('Bar', barSchema);