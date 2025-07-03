// pages/Favorites.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext);

  if (favorites.length === 0) return <p className='text-center mt-10'>No favorite meals yet. Start exploring and ❤️ your favorite meals!</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {favorites.map((meal) => (
        <div key={meal.idMeal} className="border rounded-lg p-4">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3 className="text-xl font-bold my-2">{meal.strMeal}</h3>
          <div className="flex justify-between">
            <Link to={`/meals/${meal.idMeal}`} className="text-blue-500 underline">Details</Link>
            <button onClick={() => removeFromFavorites(meal.idMeal)} className="text-red-500">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
