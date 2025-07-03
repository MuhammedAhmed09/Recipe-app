import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TrendingMeals = () => {
    const [trendingMeals, setTrendingMeals] = useState([]);

    useEffect(() => {
        const randomURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
        const requests = Array.from({ length: 5 }, () => axios.get(randomURL));
        //requests INSTEAD OF [axios.get(randomURL), axios.get(randomURL), axios.get(randomURL), axios.get(randomURL), ..6]
        
        Promise.all(requests)
            .then((response) => {
                const meals = response.map(res => res.data.meals[0]);
                setTrendingMeals(meals)
            })
            .catch(function (error) {
                console.log(error);
            });
        }, []);
        console.log(trendingMeals);
        

  return (
    <section className='px-6 md:px-[10%] py-16 bg-gray-50'>
        <h2 className='text-3xl font-bold text-center mb-10'>Trending Meals</h2>
        {trendingMeals.length === 0 ? (
            <p className='text-center text-gray-500 '>Loading trending meals...</p>
        ) : (
            <ul className='px-[5%] py-[5%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
                {trendingMeals.map((meal) => (
                    <li     
                        key={meal.idMeal}
                        className='bg-white border  border-gray-200 rounded-xl shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-emerald-50 cursor-pointer '
                    >
                        <Link to={`/recipe/${meal.idMeal}`}>
                            <img
                                src={meal?.strMealThumb} 
                                alt={meal?.strMeal} 
                                title={meal.strMeal}
                                className='w-full h-40 object-cover rounded-md mb-3'
                            />
                            <h3 className='text-xl font-bold text-emerald-700'>{meal.strMeal}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </section>
  )
}

export default TrendingMeals