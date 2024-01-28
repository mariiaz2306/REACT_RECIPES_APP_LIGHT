import React, { useState, useEffect } from "react";
import fetchRecipe from "../utils/fetchRecipe";
import DetailedRecipe from "./DetailedRecipe";


export const RecipeClicker = () => {
    const [recipeId, setRecipeId] = useState(1)
    const [recipe, setRecipe] = useState(null)
    
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRecipe(recipeId);
                setRecipe(data);
                
            } catch (err) {
                console.error(err);
            }
        };
        fetchData()
    }, [recipeId]);

    const swithRecipe = (newRecipeId) => {
        setRecipeId(newRecipeId)
    }

     const goBack = () => {
    swithRecipe(recipeId - 1);
  };

  const goForward = () => {
    swithRecipe(recipeId + 1);
  };
    return (
      <div className="buttons" >
      {recipe && <DetailedRecipe recipe={recipe} swithRecipe={swithRecipe} />}
      <button style={{margin: '50px' }} onClick={goBack} disabled={recipeId === 1}>Previous Recipe</button>
      <button onClick={goForward}>Next Recipe</button>
      </div>
    );
}




    