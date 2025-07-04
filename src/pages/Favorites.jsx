// pages/Favorites.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../context/FavoritesContext';
import { GoHeartFill } from 'react-icons/go';
import { Toaster } from 'react-hot-toast';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext);

  if (favorites.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh] text-center px-4'>
        <p className='text-2xl font-semibold text-gray-700 mb-4'>No favorite meals yet.</p>
        <p className='text-gray-500 mb-6 flex items-center'>Start exploring meals and add your favorites <span className='mx-2 text-xl text-red-600'><GoHeartFill/></span></p>
        <Link to="/" className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full shadow-md transition'>
          Browse Meals
        </Link>
      </div>
    );
  }
  
  return (
    <section className="bg-gray-50 min-h-screen px-6 md:px-[10%] py-10"> 
      <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">Your Favorite Meals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((meal) => (
          <div key={meal.idMeal} className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
            <img 
              src={meal.strMealThumb} 
              alt={meal.strMeal} 
              className="w-full h-56 object-cover"
            />
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-gray-800">{meal.strMeal}</h3>

              <div className="flex justify-between items-center">
                <Link to={`/meals/${meal.idMeal}`} className="text-emerald-600 hover:underline font-medium">View Details</Link>
                
                <button
                  onClick={
                    () => removeFromFavorites(meal.idMeal)
                  } className="text-red-500 hover:text-red-600 text-xl cursor-pointer"
                >
                  <GoHeartFill />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
