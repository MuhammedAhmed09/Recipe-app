import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const MealList = () => {
    const [meals, setMeals] = useState([]);
    const { catName } = useParams();
//FETCH MEALS
    useEffect(() => {
        const URLMeals = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`;
        axios.get(URLMeals)
        .then(function (response) {
            setMeals(response.data.meals)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [catName]);

  return (
    <ul className='px-[15%] my-[2%] grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {meals.map((meal) => (
            <li key={meal.idMeal} className='border cursor-pointer hover:mt-1 hover:border-gray-500 border-gray-300 rounded-2xl px-2 py-1'>
                <Link to={`/meal/${meal.idMeal}`}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} width={200}/>
                    <h3>{meal.strMeal}</h3>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default MealList