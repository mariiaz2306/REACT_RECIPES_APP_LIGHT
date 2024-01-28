

const fetchRecipe = async(recipeId) => {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
        const data = await response.json()
        return data;
    }
    catch (err) {
        console.log('Error: ', err);
        throw err;
        }
}

export default fetchRecipe;