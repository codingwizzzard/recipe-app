const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/middleware");

const {
  getAllRecipes,
  createRecipe,
  deleteRecipe,
  LikedList,
  getAllLikedRecipes,
  removeFromLikedRecipes,
  searchRecipes,
  getRecipeById,
  editRecipe,  // Added editRecipe route
} = require("../controllers/RecipeController");

router.post("/recipe", createRecipe);
router.get("/recipe", verifyToken, getAllRecipes);
router.get("/likedRecipes", getAllLikedRecipes);
router.delete("/recipe/:id", deleteRecipe);
router.post("/likedRecipes/:id", LikedList);
router.delete("/removeLiked/:id", removeFromLikedRecipes);
router.get("/searchRecipes/:key", searchRecipes);

// Added route to edit the recipe
router.put("/recipe/:id", editRecipe);  // Using PUT for update
router.get("/recipe/:id", getRecipeById); 

module.exports = router;
