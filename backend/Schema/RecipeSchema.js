const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [String],
  instructions: {
    type: String,
    required: true,
  },
  imageUrl: String,
  cookingTime: {
    type: Number,
    required: true,
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;