import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Addrecipe.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [""],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchRecipeDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:2000/auth/recipe/${id}`);
      const data = await response.json();
      if (data) {
        setRecipe({
          title: data.title,
          ingredients: data.ingredients,
          instructions: data.instructions,
          imageUrl: data.imageUrl,
          cookingTime: data.cookingTime,
        });
      } else {
        toast.error("Recipe not found.");
        navigate("/recipes");
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      toast.error("An error occurred while fetching the recipe.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleAddIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, ""],
    });
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({
      ...recipe,
      ingredients: updatedIngredients,
    });
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index] = value;
    setRecipe({
      ...recipe,
      ingredients: updatedIngredients,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nonEmptyIngredients = recipe.ingredients.filter(
      (ingredient) => ingredient.trim() !== ""
    );

    if (nonEmptyIngredients.length === 0) {
      toast.warn("Please provide at least one non-empty ingredient.");
      return;
    }

    if (!recipe.title || !recipe.instructions || !recipe.imageUrl || !recipe.cookingTime) {
      toast.warn("Please fill in all the fields.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:2000/auth/recipe/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });

      if (response.ok) {
        toast.success("Recipe updated successfully");
        setTimeout(() => {
          navigate("/recipes");
        }, 4000);
      } else {
        toast.error("Failed to update recipe");
      }
    } catch (error) {
      toast.error("An error occurred while updating the recipe:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="add-recipe">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Ingredients:</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-input">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                required
              />
              {recipe.ingredients.length > 1 && (
                <button type="button" style={{marginBottom:"10px" }} onClick={() => handleRemoveIngredient(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddIngredient} style={{backgroundColor:"#007bff"}}>
            Add Ingredient
          </button>
        </div>
        <div>
          <label>Instructions:</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Cooking Time (minutes):</label>
          <input
            type="number"
            name="cookingTime"
            value={recipe.cookingTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Update Recipe</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditRecipe;
