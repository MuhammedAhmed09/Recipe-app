import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FavoriteContext } from '../context/FavoritesContext';

//ICONS
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { Toaster } from 'react-hot-toast';


const MealDetails = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    // favorite code
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoriteContext);
    const isFavorited = meal && favorites.some(fav => fav.idMeal === meal.idMeal);

    //FETCH MEAL
    useEffect(() => {
      const URLMeals = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      axios.get(URLMeals)
        .then(function (response) {
          setMeal(response.data.meals[0]);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    }, [idMeal]);

    if (!meal) return <p className="text-center text-red-600 font-semibold mt-10">Meal not found.</p>;
    if (loading) return (
      <div className='flex justify-center items-center h-[50vh]'> 
        <p className="text-lg text-emerald-600 font-semibold animate-pulse">Loading meal details...</p>
      </div>
    );

  return (
    <section className='py-10 px-6 md:px-[15%] min-h-screen bg-gray-50' >
      <div className='flex flex-col-reverse md:flex-row items-center gap-10 bg-white p-6 rounded-2xl shadow-xl'>
        <div className='w-full md:w-[50%]'>
          <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal}
            className='rounded-xl w-full md:w-[50%] max-h-[400px] object-cover shadow-md'
          />
        </div>

        <div className='text-gray-800 space-y-4 md:w-[50%]'>
          <div className='flex justify-between items-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-emerald-700'>
              {meal.strMeal}
            </h2>
            {/* favorite code */}
            {meal && (
              <div className='ml-2'>
                {isFavorited ? (
                  <button onClick={() => removeFromFavorites(meal.idMeal)} className='text-red-600 cursor-pointer text-3xl'><GoHeartFill/></button>
                ) : (
                  <button onClick={() => addToFavorites(meal)} className='text-gray-300 cursor-pointer text-3xl'><GoHeart /></button>
                )}
              </div>
            )}   
          </div> 

          <p>
            <span className='font-semibold'>Category:</span> {meal.strCategory}
          </p>
          <p>
            <span className='font-semibold'>Area:</span> {meal.strArea}
          </p>

          <div className='mt-4'>
            <h3 className='text-xl font-semibold text-emerald-600 mb-2'>Instructions</h3>
            {meal.strInstructions ? (
              <p className='text-gray-700 leading-relaxed whitespace-pre-line'>
                {meal.strInstructions}
              </p>
            ) : (
              <p className='text-gray-500 italic'>
                No instructions provided.
              </p>
            )}

            {meal.strYoutube && (
              <a 
                href={meal.strYoutube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-emerald-600 hover:underline font-semibold"
              >
                Watch Tutorial on YouTube 🎥
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MealDetails