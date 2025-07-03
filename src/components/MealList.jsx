import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FavoriteContext } from '../context/FavoritesContext';

const MealList = () => {
    const [meals, setMeals] = useState([]);
    const { catName } = useParams();
    const [loading, setLoading] = useState(true);

//FETCH MEALS
    useEffect(() => {
        const URLMeals = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`;
        axios.get(URLMeals)
            .then(function (response) {
                setMeals(response.data.meals);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            }
        );
    }, [catName]);

    if (loading) {
        return <p className="text-center text-emerald-700 font-semibold mt-10">Loading meals...</p>;
    }
    
    if (!meals || meals.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No meals found for this category.</p>;
    }
    

  return (
    <>
        <h2 className="text-3xl font-bold text-emerald-700 my-10 text-center">Explore {catName} Meals</h2>

        <ul className='px-4 py-6 sm:px-6 md:px-[10%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-5 lg:gap-6'>
            {loading ? (
                // Skeleton Loading Cards
                Array.from({ length: 12 }).map((_, index) => (
                    <li key={index} className="animate-pulse bg-gray-100 p-4 rounded-xl">
                        <div className="bg-gray-300 w-full aspect-[4/3] rounded-xl mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </li>
                ))
            ) : (
                meals.map((meal) => (
                    <li key={meal.idMeal} className='bg-white border border-gray-100 rounded-xl shadow-sm p-4 hover:shadow-xl hover:-translate-y-1 cursor-pointer transition'>
                        <Link to={`/meals/${meal.idMeal}`}>
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className='w-full aspect-[4/3] object-cover rounded-xl hover:scale-105 transition-transform duration-300'
                            />
                            <h3 className='text-emerald-700 text-lg font-bold text-center'>{meal.strMeal}</h3>
                        </Link>
                    </li>
                ))
            )}
        </ul>
    </>
  )
}

export default MealList