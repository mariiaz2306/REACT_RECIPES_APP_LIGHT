

const DetailedRecipe = ({recipe}) => {
  return (
      <div className='main'>
          <h1>{recipe.name}</h1>
          <p className='serving'>This dish contains {recipe.servings} portions</p>
          <p>Nutrition value per 100 grams is {recipe.caloriesPerServing}</p>
          <p className='preparetion'>Prep Time: {recipe.prepTimeMinutes} minutes</p>
          <img src={recipe.image} alt={`Image of ${recipe.title} recipe`} />
          <ul>
              {recipe.ingredients.map((item,index) => (
                  
                  <li key={index}>{item}</li>
              ))}            
          </ul>
          <p className='instruction'>{recipe.instructions}</p>
    
    </div>
  )
}

export default DetailedRecipe