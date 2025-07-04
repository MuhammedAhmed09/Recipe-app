import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (meal) => {
        if (!favorites.find(fav => fav.idMeal === meal.idMeal)) {
            setFavorites([...favorites, meal]);
            toast.success(
                <div><p className="font-bold">{meal.strMeal} </p>added to favorites!</div>
            )
        }
    };

    const removeFromFavorites = (id) => {
        const meal = favorites.find(fav => fav.idMeal === id);
        if(!meal) return;

        toast(
            <div>
                <p className="font-bold">{meal.strMeal}</p>removed from favorites
            </div>,
            {
                icon: '🗑️',
            }
        );
        
        setFavorites(favorites.filter(fav => fav.idMeal !== id));
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
};
    