
// --- Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// --- Schema 
const ingredientSchema = new mongoose.Schema({
	name: String,
	calories: Number,
	protein: Number,
	carbs: Number,
	fiber: Number,
	sugar: Number,
	total_fat: Number,
	sat_fat: Number,
	cholesterol: Number,
	nutrient_1: {
		name: String,
		daily_percentage: Number,
	},
	nutrient_2: {
		name: String,
		daily_percentage: Number,
	},
	nutrient_3: {
		name: String,
		daily_percentage: Number,
	}
});

// --- Return model
module.exports = restful.model('Ingredient', ingredientSchema);