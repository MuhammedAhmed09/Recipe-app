import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MealDetails = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState(null);
//FETCH MEAL
    useEffect(() => {
      const URLMeals = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
      axios.get(URLMeals)
      .then(function (response) {
        setMeal(response.data.meals[0]);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }, [mealId]);

    
    if (!meal) return <p>Loading...</p>;
  return (
    <section>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} width={300}/>
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <p><strong>Instructions:</strong> {meal.strInstructions}</p>
    </section>
  )
}

export default MealDetails